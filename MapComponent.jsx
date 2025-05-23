import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, ImageOverlay, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { entities, mapData } from '../data/entities';

// 修复Leaflet默认图标问题
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// 自定义图标
const createCustomIcon = (type) => {
  const iconColors = {
    mountain: '#8C6D46', // 棕色
    river: '#4A90E2',    // 蓝色
    beast: '#BF4342',    // 红色
    plant: '#2E7D32',    // 绿色
    deity: '#9C27B0'     // 紫色
  };

  return new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    className: `marker-${type}`,
    // 使用CSS过滤器改变图标颜色
    html: `<div style="filter: hue-rotate(${iconColors[type] || '#000000'})"></div>`
  });
};

// 地图视图控制组件
const MapViewController = ({ mapType, center, zoom, bounds }) => {
  const map = useMap();
  
  useEffect(() => {
    map.setView(center, zoom);
    if (bounds) {
      map.fitBounds(bounds);
    }
  }, [map, center, zoom, bounds, mapType]);
  
  return null;
};

const MapComponent = ({ 
  mapType = 'modern', 
  selectedTypes = ['mountain', 'river', 'beast', 'plant', 'deity'],
  onMarkerClick
}) => {
  const [filteredEntities, setFilteredEntities] = useState([]);
  
  // 根据选中的类型筛选实体
  useEffect(() => {
    const filtered = entities.filter(entity => selectedTypes.includes(entity.type));
    setFilteredEntities(filtered);
  }, [selectedTypes]);

  // 获取当前地图配置
  const currentMap = mapType === 'ancient' ? mapData.ancient_map : mapData.modern_map;
  
  return (
    <div className="map-container" style={{ height: '600px', width: '100%' }}>
      <MapContainer 
        center={currentMap.initial_view.center} 
        zoom={currentMap.initial_view.zoom} 
        style={{ height: '100%', width: '100%' }}
        zoomControl={true}
        attributionControl={false}
      >
        {/* 地图控制器 */}
        <MapViewController 
          mapType={mapType}
          center={currentMap.initial_view.center}
          zoom={currentMap.initial_view.zoom}
          bounds={currentMap.bounds}
        />
        
        {/* 底图 */}
        {mapType === 'ancient' ? (
          // 古代风格地图（使用图片覆盖）
          <ImageOverlay
            url={process.env.PUBLIC_URL + '/assets/ancient_map.jpg'}
            bounds={currentMap.bounds}
            opacity={0.8}
          />
        ) : (
          // 现代地图（使用OpenStreetMap）
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        )}
        
        {/* 标记点 */}
        {filteredEntities.map(entity => {
          // 根据地图类型选择坐标
          const coordinates = mapType === 'ancient' 
            ? entity.location.ancient.coordinates 
            : entity.location.modern.coordinates;
            
          return (
            <Marker 
              key={entity.id}
              position={coordinates}
              icon={createCustomIcon(entity.type)}
              eventHandlers={{
                click: () => {
                  if (onMarkerClick) {
                    onMarkerClick(entity);
                  }
                }
              }}
            >
              <Popup>
                <div>
                  <h3>{entity.name}</h3>
                  <p>{entity.type === 'mountain' ? '山川' : 
                      entity.type === 'river' ? '河流' : 
                      entity.type === 'beast' ? '野兽' : 
                      entity.type === 'plant' ? '树木' : '神仙'}</p>
                  <p>{mapType === 'ancient' ? entity.location.ancient.description : entity.location.modern.description}</p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
