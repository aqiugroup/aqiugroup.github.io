// 山海经地理实体数据
export const entities = [
  // 南山经实体
  {
    id: "south_mountain_1",
    name: "首山",
    type: "mountain",
    source: {
      book: "南山经",
      chapter: "南山经",
      original_text: "南山经之首曰鹊山，其首曰招摇之山，临于西海之上，多桂多金玉。有草焉，其状如韭而青华，其名曰祝馀，食之不饥。有木焉，其状如榖而黑理，其名曰文茎，佩之可以御兵。"
    },
    description: {
      ancient: "南山经之首曰鹊山，其首曰招摇之山，临于西海之上，多桂多金玉。",
      modern: "南山经的第一座山是鹊山，山的最高处叫招摇山，靠近西海，山上有很多桂树、黄金和玉石。"
    },
    location: {
      ancient: {
        description: "临于西海之上",
        coordinates: [120, 200] // 古地图上的坐标（示例值）
      },
      modern: {
        province: "浙江",
        description: "可能位于今浙江舟山群岛一带",
        coordinates: [122.2, 30.1] // 经纬度（示例值）
      }
    },
    properties: {
      medicinal: false,
      magical: true,
      dangerous: false
    },
    related_entities: ["south_plant_1", "south_plant_2"],
    images: {
      ancient: "",
      modern: ""
    }
  },
  
  // 西山经实体
  {
    id: "west_mountain_1",
    name: "钱来山",
    type: "mountain",
    source: {
      book: "西山经",
      chapter: "西山一经",
      original_text: "西山经华山之首，曰钱来之山，其上多松，其下多洗石。"
    },
    description: {
      ancient: "西山经华山之首，曰钱来之山，其上多松，其下多洗石。",
      modern: "西山经的第一座山是钱来山，山上有很多松树，山下有很多洗石。"
    },
    location: {
      ancient: {
        description: "西山经华山之首",
        coordinates: [180, 250] // 古地图上的坐标（示例值）
      },
      modern: {
        province: "陕西",
        description: "可能位于今陕西华山一带",
        coordinates: [110.1, 34.5] // 经纬度（示例值）
      }
    },
    properties: {
      medicinal: false,
      magical: false,
      dangerous: false
    },
    related_entities: ["west_beast_1"],
    images: {
      ancient: "",
      modern: ""
    }
  },
  
  // 北山经实体
  {
    id: "north_mountain_1",
    name: "单狐山",
    type: "mountain",
    source: {
      book: "北山经",
      chapter: "北山一经",
      original_text: "北山经之首，曰单狐之山，多机木，其上多华草。潜水出焉，而西流注于渤海，其中多莨石、文石。"
    },
    description: {
      ancient: "北山经之首，曰单狐之山，多机木，其上多华草。",
      modern: "北山经的第一座山是单狐山，山上有很多机木和华草。"
    },
    location: {
      ancient: {
        description: "北山经之首",
        coordinates: [220, 150] // 古地图上的坐标（示例值）
      },
      modern: {
        province: "宁夏",
        description: "可能位于今宁夏北部一带",
        coordinates: [106.2, 38.5] // 经纬度（示例值）
      }
    },
    properties: {
      medicinal: true,
      magical: false,
      dangerous: false
    },
    related_entities: ["north_river_1"],
    images: {
      ancient: "",
      modern: ""
    }
  },
  
  // 东山经实体
  {
    id: "east_mountain_1",
    name: "樕[朱虫虫]山",
    type: "mountain",
    source: {
      book: "东山经",
      chapter: "东山一经",
      original_text: "东山经之首，曰樕[朱虫虫]之山，北临乾昧。食水出焉，而东北流注于海。其中多鲭鲤之鱼，其状如犀牛，其音如豚。"
    },
    description: {
      ancient: "东山经之首，曰樕[朱虫虫]之山，北临乾昧。",
      modern: "东山经的第一座山是樕[朱虫虫]山，北面靠近乾昧。"
    },
    location: {
      ancient: {
        description: "东山经之首，北临乾昧",
        coordinates: [320, 220] // 古地图上的坐标（示例值）
      },
      modern: {
        province: "山东",
        description: "可能位于今山东半岛一带",
        coordinates: [120.4, 36.9] // 经纬度（示例值）
      }
    },
    properties: {
      medicinal: false,
      magical: false,
      dangerous: false
    },
    related_entities: ["east_river_1", "east_beast_1"],
    images: {
      ancient: "",
      modern: ""
    }
  },
  
  // 中山经实体
  {
    id: "central_mountain_1",
    name: "甘枣山",
    type: "mountain",
    source: {
      book: "中山经",
      chapter: "中山一经",
      original_text: "中山经薄山之首，曰甘枣之山。共水出焉，而西流注于河。其上多杻木，其下多箨草。其状如葵，叶如杏，赤华而毒，实如欲，服之不忧。有兽焉，其状如[虫犬]鼠，前足善搏，膏其手，摩之不食，可以御火，其名曰[堇能]。"
    },
    description: {
      ancient: "中山经薄山之首，曰甘枣之山。共水出焉，而西流注于河。其上多杻木，其下多箨草。",
      modern: "中山经的第一座山是甘枣山，共水从这里发源，向西流入黄河。山上有很多杻木，山下有很多箨草。"
    },
    location: {
      ancient: {
        description: "中山经薄山之首",
        coordinates: [250, 250] // 古地图上的坐标（示例值）
      },
      modern: {
        province: "河南",
        description: "可能位于今河南中西部一带",
        coordinates: [113.5, 34.8] // 经纬度（示例值）
      }
    },
    properties: {
      medicinal: true,
      magical: true,
      dangerous: false
    },
    related_entities: ["central_river_1", "central_beast_1", "central_plant_1"],
    images: {
      ancient: "",
      modern: ""
    }
  },
  
  // 河流实体
  {
    id: "south_river_1",
    name: "丹水",
    type: "river",
    source: {
      book: "南山经",
      chapter: "南山经",
      original_text: "丹水出焉，西流注于渭。"
    },
    description: {
      ancient: "丹水出焉，西流注于渭。",
      modern: "丹水从这里发源，向西流入渭水。"
    },
    location: {
      ancient: {
        description: "西流注于渭",
        coordinates: [150, 210] // 古地图上的坐标（示例值）
      },
      modern: {
        province: "陕西",
        description: "可能对应今陕西省境内的丹江",
        coordinates: [109.5, 33.7] // 经纬度（示例值）
      }
    },
    properties: {
      medicinal: false,
      magical: false,
      dangerous: false
    },
    related_entities: [],
    images: {
      ancient: "",
      modern: ""
    }
  },
  
  // 野兽实体
  {
    id: "south_beast_1",
    name: "獬豸",
    type: "beast",
    source: {
      book: "西山经",
      chapter: "西山一经",
      original_text: "有兽焉，其状如羊而马尾，名曰獬豸，其脂可以已腊。"
    },
    description: {
      ancient: "有兽焉，其状如羊而马尾，名曰獬豸，其脂可以已腊。",
      modern: "有一种野兽，形状像羊但有马的尾巴，名叫獬豸，它的脂肪可以治疗皮肤干裂。"
    },
    location: {
      ancient: {
        description: "生活在钱来山",
        coordinates: [180, 250] // 古地图上的坐标（示例值）
      },
      modern: {
        province: "陕西",
        description: "传说中生活在华山一带的神兽",
        coordinates: [110.1, 34.5] // 经纬度（示例值）
      }
    },
    properties: {
      medicinal: true,
      magical: true,
      dangerous: false
    },
    related_entities: ["west_mountain_1"],
    images: {
      ancient: "",
      modern: ""
    }
  },
  
  // 树木实体
  {
    id: "south_plant_1",
    name: "文茎",
    type: "plant",
    source: {
      book: "南山经",
      chapter: "南山经",
      original_text: "有木焉，其状如榖而黑理，其名曰文茎，佩之可以御兵。"
    },
    description: {
      ancient: "有木焉，其状如榖而黑理，其名曰文茎，佩之可以御兵。",
      modern: "有一种树木，形状像谷物但有黑色纹理，名叫文茎，佩戴它可以抵御兵器伤害。"
    },
    location: {
      ancient: {
        description: "生长在招摇山",
        coordinates: [120, 200] // 古地图上的坐标（示例值）
      },
      modern: {
        province: "浙江",
        description: "传说中生长在浙江舟山群岛一带的神木",
        coordinates: [122.2, 30.1] // 经纬度（示例值）
      }
    },
    properties: {
      medicinal: false,
      magical: true,
      dangerous: false
    },
    related_entities: ["south_mountain_1"],
    images: {
      ancient: "",
      modern: ""
    }
  },
  
  // 神仙实体
  {
    id: "deity_1",
    name: "西王母",
    type: "deity",
    source: {
      book: "西山经",
      chapter: "西次四经",
      original_text: "又西三百五十里，曰玉山，是西王母所居也。西王母其状如人，豹尾虎齿而善啸，蓬发戴胜，是司天之厉及五残。"
    },
    description: {
      ancient: "西王母其状如人，豹尾虎齿而善啸，蓬发戴胜，是司天之厉及五残。",
      modern: "西王母形状像人，有豹子的尾巴和老虎的牙齿，善于长啸，头发蓬松戴着胜冠，她掌管天灾和五种灾祸。"
    },
    location: {
      ancient: {
        description: "居住在玉山",
        coordinates: [100, 230] // 古地图上的坐标（示例值）
      },
      modern: {
        province: "新疆",
        description: "传说中居住在昆仑山一带",
        coordinates: [86.0, 36.0] // 经纬度（示例值）
      }
    },
    properties: {
      medicinal: false,
      magical: true,
      dangerous: true
    },
    related_entities: [],
    images: {
      ancient: "",
      modern: ""
    }
  }
];

// 地图数据
export const mapData = {
  ancient_map: {
    base_url: "/assets/ancient_map.jpg",
    bounds: [[0, 0], [500, 500]], // 地图边界
    initial_view: {
      center: [250, 250],
      zoom: 3
    }
  },
  modern_map: {
    base_url: "/assets/modern_map.jpg",
    bounds: [[18, 73], [54, 135]], // 中国地图边界
    initial_view: {
      center: [35, 105],
      zoom: 4
    }
  }
};
