import React, { useState } from 'react';
import './App.css';
import MapComponent from './components/MapComponent';
import { entities } from './data/entities';

function App() {
  // 状态管理
  const [mapType, setMapType] = useState('ancient'); // 'ancient' 或 'modern'
  const [selectedTypes, setSelectedTypes] = useState(['mountain', 'river', 'beast', 'plant', 'deity']);
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // 处理地图类型切换
  const handleMapTypeChange = () => {
    setMapType(mapType === 'ancient' ? 'modern' : 'ancient');
  };

  // 处理类型筛选
  const handleTypeToggle = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  // 处理搜索
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    
    const results = entities.filter(entity => 
      entity.name.toLowerCase().includes(query.toLowerCase()) ||
      entity.description.modern.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  // 处理标记点击
  const handleMarkerClick = (entity) => {
    setSelectedEntity(entity);
  };

  // 类型名称映射
  const typeNames = {
    mountain: '山川',
    river: '河流',
    beast: '野兽',
    plant: '树木',
    deity: '神仙/山神'
  };

  return (
    <div className="App">
      <header className="header">
        <h1>《山海经》地理信息交互式地图</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="搜索山川、河流、野兽、树木、神仙..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
          {searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map(result => (
                <div 
                  key={result.id} 
                  className="search-result-item"
                  onClick={() => {
                    setSelectedEntity(result);
                    setSearchResults([]);
                    setSearchQuery('');
                  }}
                >
                  <span>{result.name}</span>
                  <span className="result-type">{typeNames[result.type]}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="map-toggle">
          <span className={mapType === 'ancient' ? 'active' : ''}>古代风格</span>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={mapType === 'modern'}
              onChange={handleMapTypeChange}
            />
            <span className="slider round"></span>
          </label>
          <span className={mapType === 'modern' ? 'active' : ''}>现代地理</span>
        </div>
      </header>

      <div className="main-content">
        <div className="filter-panel">
          <h2>筛选</h2>
          <div className="filter-section">
            <h3>实体类别</h3>
            {Object.entries(typeNames).map(([type, name]) => (
              <div key={type} className="filter-item">
                <input
                  type="checkbox"
                  id={`type-${type}`}
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleTypeToggle(type)}
                />
                <label htmlFor={`type-${type}`}>{name}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="map-section">
          <MapComponent 
            mapType={mapType}
            selectedTypes={selectedTypes}
            onMarkerClick={handleMarkerClick}
          />
        </div>

        <div className="detail-panel">
          {selectedEntity ? (
            <div className="entity-details">
              <h2>{selectedEntity.name}</h2>
              <div className="entity-type">{typeNames[selectedEntity.type]}</div>
              
              <div className="detail-section">
                <h3>出处</h3>
                <p>{selectedEntity.source.book} · {selectedEntity.source.chapter}</p>
                <div className="original-text">
                  <p>{selectedEntity.source.original_text}</p>
                </div>
              </div>
              
              <div className="detail-section">
                <h3>解读</h3>
                <p>{selectedEntity.description.modern}</p>
              </div>
              
              <div className="detail-section">
                <h3>地理位置</h3>
                <div className="location-info">
                  <div>
                    <h4>古代描述</h4>
                    <p>{selectedEntity.location.ancient.description}</p>
                  </div>
                  <div>
                    <h4>现代对应</h4>
                    <p>{selectedEntity.location.modern.description}</p>
                    <p>所在省份：{selectedEntity.location.modern.province}</p>
                  </div>
                </div>
              </div>
              
              {selectedEntity.properties.medicinal || selectedEntity.properties.magical ? (
                <div className="detail-section">
                  <h3>特性</h3>
                  <ul className="properties-list">
                    {selectedEntity.properties.medicinal && <li>具有药用价值</li>}
                    {selectedEntity.properties.magical && <li>具有神奇功效</li>}
                    {selectedEntity.properties.dangerous && <li>具有危险性</li>}
                  </ul>
                </div>
              ) : null}
            </div>
          ) : (
            <div className="no-selection">
              <p>点击地图上的标记查看详细信息</p>
            </div>
          )}
        </div>
      </div>

      <footer className="footer">
        <p>数据来源：《山海经》及相关研究文献</p>
        <p>© 2025 山海经地理信息交互式地图</p>
      </footer>
    </div>
  );
}

export default App;
