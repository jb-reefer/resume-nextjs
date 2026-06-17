import styled, { createGlobalStyle } from 'styled-components';

export const LeafletStyles = createGlobalStyle`
  .custom-marker {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 3px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    transition: all 0.2s;
  }

  .custom-marker:hover {
    transform: scale(1.15);
    box-shadow: 0 4px 12px rgba(0,0,0,0.4);
  }

  .leaflet-div-icon {
    background: transparent;
    border: none;
  }

  .leaflet-popup-content-wrapper {
    padding: 0;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  }

  .leaflet-popup-content {
    margin: 0;
    width: 280px !important;
  }

  .leaflet-popup-tip {
    background: white;
  }
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 16px;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 4px;
`;

export const Subtitle = styled.p`
  color: #64748b;
  font-size: 0.95rem;
`;

export const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
`;

export const FilterButton = styled.button<{ $active?: boolean }>`
  padding: 8px 16px;
  border: 1px solid ${props => props.$active ? '#0f172a' : '#e2e8f0'};
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  background: ${props => props.$active ? '#0f172a' : 'white'};
  color: ${props => props.$active ? 'white' : '#475569'};

  &:hover {
    background: ${props => props.$active ? '#0f172a' : '#f1f5f9'};
    border-color: ${props => props.$active ? '#0f172a' : '#cbd5e1'};
  }
`;

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const MapSection = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`;

export const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
`;

export const LegendBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 12px;
  background: #f8fafc;
  flex-wrap: wrap;
  border-top: 1px solid #e2e8f0;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #64748b;
`;

export const LegendDot = styled.div<{ $color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.$color};
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StatsBox = styled.div`
  background: white;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);

  h3 {
    font-size: 14px;
    font-weight: 600;
    color: #0f172a;
    margin-bottom: 12px;
  }
`;

export const StatRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #f1f5f9;
  font-size: 13px;

  &:last-child {
    border-bottom: none;
  }
`;

export const StatLabel = styled.span`
  color: #64748b;
`;

export const StatValue = styled.span`
  font-weight: 600;
  color: #0f172a;
`;

export const AmenityLegend = styled.div`
  background: white;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);

  h3 {
    font-size: 14px;
    font-weight: 600;
    color: #0f172a;
    margin-bottom: 12px;
  }
`;

export const AmenGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;

export const AmenLegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #475569;
`;

// Popup styles
export const PopupCard = styled.div`
  width: 280px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

export const PopupHero = styled.div<{ $imgSrc?: string }>`
  width: 100%;
  height: 140px;
  background-image: ${props => props.$imgSrc ? `url(${props.$imgSrc})` : 'none'};
  background-size: cover;
  background-position: center;
  border-radius: 8px 8px 0 0;
`;

export const PopupContent = styled.div`
  padding: 12px;
`;

export const PopupHood = styled.span<{ $color: string }>`
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 10px;
  margin-bottom: 6px;
  background: ${props => props.$color}20;
  color: ${props => props.$color};
`;

export const PopupName = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 2px;
`;

export const PopupAddr = styled.div`
  font-size: 12px;
  color: #64748b;
  margin-bottom: 8px;
`;

export const PopupPrice = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #059669;
  margin-bottom: 6px;
`;

export const PopupDesc = styled.div`
  font-size: 12px;
  color: #475569;
  margin-bottom: 10px;
`;

export const PopupAmenities = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 10px;
`;

export const PopupAmenTag = styled.span`
  font-size: 11px;
  padding: 2px 6px;
  background: #f1f5f9;
  border-radius: 4px;
`;

export const PopupLink = styled.a`
  display: inline-block;
  color: #2563eb;
  text-decoration: none;
  font-size: 12px;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  background: #f8fafc;
  color: #64748b;
  font-size: 14px;
`;
