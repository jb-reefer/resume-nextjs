import React, { useEffect, useRef, useState } from 'react';
import {
  buildings,
  buildingImages,
  neighborhoodColors,
  amenityIcons,
  amenityLabels,
  IBuilding,
} from '../../data/rentals';
import * as S from './styles';

// We need to import Leaflet types but the actual library is loaded dynamically
import type { Map as LeafletMap, Marker } from 'leaflet';

interface MapComponentProps {
  L: typeof import('leaflet');
}

const MapComponent: React.FC<MapComponentProps> = ({ L }) => {
  const mapRef = useRef<LeafletMap | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<Marker[]>([]);
  const [currentFilter, setCurrentFilter] = useState<string>('All');

  const createPopupContent = (b: IBuilding): string => {
    const color = neighborhoodColors[b.neighborhood];
    const imgSrc = buildingImages[b.id];

    const heroHtml = imgSrc
      ? `<div style="width:100%;height:140px;background-image:url(${imgSrc});background-size:cover;background-position:center;border-radius:8px 8px 0 0;"></div>`
      : '';

    const topAmenities = b.amenities.slice(0, 5).map(a =>
      `<span style="font-size:11px;padding:2px 6px;background:#f1f5f9;border-radius:4px;">${amenityIcons[a] || ''} ${amenityLabels[a] || a}</span>`
    ).join(' ');

    const moreCount = b.amenities.length > 5
      ? `<span style="font-size:11px;padding:2px 6px;background:#f1f5f9;border-radius:4px;">+${b.amenities.length - 5}</span>`
      : '';

    return `
      <div style="width:280px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
        ${heroHtml}
        <div style="padding:12px;">
          <span style="display:inline-block;font-size:10px;font-weight:600;padding:3px 8px;border-radius:10px;margin-bottom:6px;background:${color}20;color:${color}">${b.neighborhood}</span>
          <div style="font-size:15px;font-weight:700;color:#0f172a;margin-bottom:2px;">${b.name}</div>
          <div style="font-size:12px;color:#64748b;margin-bottom:8px;">${b.address}</div>
          <div style="font-size:14px;font-weight:700;color:#059669;margin-bottom:6px;">${b.priceRange}</div>
          <div style="font-size:12px;color:#475569;margin-bottom:10px;">${b.description}</div>
          <div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:10px;">${topAmenities}${moreCount}</div>
          <a href="${b.url}" target="_blank" style="color:#2563eb;text-decoration:none;font-size:12px;font-weight:500;">View on StreetEasy →</a>
        </div>
      </div>
    `;
  };

  const renderMarkers = () => {
    if (!mapRef.current) return;

    // Clear existing markers
    markersRef.current.forEach(m => mapRef.current?.removeLayer(m));
    markersRef.current = [];

    const filtered = currentFilter === 'All'
      ? buildings
      : buildings.filter(b => b.neighborhood === currentFilter);

    filtered.forEach(b => {
      const color = neighborhoodColors[b.neighborhood];

      const icon = L.divIcon({
        className: 'leaflet-div-icon',
        html: `<div class="custom-marker" style="background:${color};">🏢</div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 18],
      });

      const marker = L.marker([b.lat, b.lng], { icon }).addTo(mapRef.current!);

      marker.bindPopup(createPopupContent(b), {
        maxWidth: 300,
        className: 'building-popup',
      });

      markersRef.current.push(marker);
    });
  };

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    mapRef.current = L.map(mapContainerRef.current).setView([40.6875, -73.985], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(mapRef.current);

    renderMarkers();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [L]);

  useEffect(() => {
    renderMarkers();
  }, [currentFilter]);

  const hoods = ['All', ...Object.keys(neighborhoodColors)];
  const counts: Record<string, number> = { All: buildings.length };
  Object.keys(neighborhoodColors).forEach(h => {
    counts[h] = buildings.filter(b => b.neighborhood === h).length;
  });

  return (
    <>
      <S.LeafletStyles />
      <S.Container>
        <S.Header>
          <S.Title>Brooklyn Luxury Rentals</S.Title>
          <S.Subtitle>19 premium buildings across 5 neighborhoods</S.Subtitle>
        </S.Header>

        <S.Filters>
          {hoods.map(h => (
            <S.FilterButton
              key={h}
              $active={currentFilter === h}
              onClick={() => setCurrentFilter(h)}
            >
              {h} ({counts[h]})
            </S.FilterButton>
          ))}
        </S.Filters>

        <S.MainGrid>
          <S.MapSection>
            <S.MapWrapper ref={mapContainerRef} />
            <S.LegendBar>
              {Object.entries(neighborhoodColors).map(([name, color]) => (
                <S.LegendItem key={name}>
                  <S.LegendDot $color={color} />
                  {name}
                </S.LegendItem>
              ))}
            </S.LegendBar>
          </S.MapSection>

          <S.Sidebar>
            <S.StatsBox>
              <h3>Overview</h3>
              <S.StatRow>
                <S.StatLabel>Total Buildings</S.StatLabel>
                <S.StatValue>19</S.StatValue>
              </S.StatRow>
              <S.StatRow>
                <S.StatLabel>Neighborhoods</S.StatLabel>
                <S.StatValue>5</S.StatValue>
              </S.StatRow>
              <S.StatRow>
                <S.StatLabel>Price Range</S.StatLabel>
                <S.StatValue>$2.8K - $34K</S.StatValue>
              </S.StatRow>
              <S.StatRow>
                <S.StatLabel>Click a marker</S.StatLabel>
                <S.StatValue>for details</S.StatValue>
              </S.StatRow>
            </S.StatsBox>

            <S.AmenityLegend>
              <h3>Amenity Icons</h3>
              <S.AmenGrid>
                {Object.entries(amenityIcons).map(([key, icon]) => (
                  <S.AmenLegendItem key={key}>
                    {icon} {amenityLabels[key] || key}
                  </S.AmenLegendItem>
                ))}
              </S.AmenGrid>
            </S.AmenityLegend>
          </S.Sidebar>
        </S.MainGrid>
      </S.Container>
    </>
  );
};

// Wrapper component that handles dynamic Leaflet loading
const RentalsMap: React.FC = () => {
  const [leaflet, setLeaflet] = useState<typeof import('leaflet') | null>(null);

  useEffect(() => {
    import('leaflet').then(L => {
      setLeaflet(L.default || L);
    });
  }, []);

  if (!leaflet) {
    return (
      <S.Container>
        <S.LoadingWrapper>Loading map...</S.LoadingWrapper>
      </S.Container>
    );
  }

  return <MapComponent L={leaflet} />;
};

export default RentalsMap;
