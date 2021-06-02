<template>
  <a-collapse v-model:activeKey="activeKey">
    <a-collapse-panel key="1" header="1. Hafta">
      <a-descriptions title="Program Açıklması" bordered>
        <a-descriptions-item label="1. Gün">
          <a-list item-layout="horizontal" :data-source="data">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta
                  description="Normal şekilde yapabilrdiğin ağırlıkla çalısabilirsin"
                >
                  <template #title>
                    <a href="https://www.antdv.com/">{{ item.title }}</a>
                  </template>
                  <template #avatar>
                    <a-avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </a-descriptions-item>
        <a-descriptions-item label="2. Gün">
          <a-list item-layout="horizontal" :data-source="data">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta
                  description="Normal şekilde yapabilrdiğin ağırlıkla çalısabilirsin"
                >
                  <template #title>
                    <a href="https://www.antdv.com/">{{ item.title }}</a>
                  </template>
                  <template #avatar>
                    <a-avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </a-descriptions-item>
        <a-descriptions-item label="3. Gün">
          <a-list item-layout="horizontal" :data-source="data">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta
                  description="Normal şekilde yapabilrdiğin ağırlıkla çalısabilirsin"
                >
                  <template #title>
                    <a href="https://www.antdv.com/">{{ item.title }}</a>
                  </template>
                  <template #avatar>
                    <a-avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </a-descriptions-item>
        <a-descriptions-item label="Hocanın notları">
          <p>
            İlk hafta için kendine yüklenme verilen programa harfiyen uygumana
            görek yok oncesinde kendini alışıtrımak için denemeler yapabilirsin
          </p>
        </a-descriptions-item>
        <a-descriptions-item label="Beslenme tavsiyesi">
          <p>
            İlk hafta için kendine yüklenme verilen programa harfiyen uygumana
            görek yok oncesinde kendini alışıtrımak için denemeler yapabilirsin
          </p>
        </a-descriptions-item>
      </a-descriptions>
    </a-collapse-panel>
    <a-collapse-panel key="2" header="2. hafta">
      <a-descriptions title="Program Açıklması" bordered>
        <a-descriptions-item label="1. Gün">
          <a-list item-layout="horizontal" :data-source="data">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta
                  description="Normal şekilde yapabilrdiğin ağırlıkla çalısabilirsin"
                >
                  <template #title>
                    <a href="https://www.antdv.com/">{{ item.title }}</a>
                  </template>
                  <template #avatar>
                    <a-avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </a-descriptions-item>
        <a-descriptions-item label="2. Gün">
          <a-list item-layout="horizontal" :data-source="data">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta
                  description="Normal şekilde yapabilrdiğin ağırlıkla çalısabilirsin"
                >
                  <template #title>
                    <a href="https://www.antdv.com/">{{ item.title }}</a>
                  </template>
                  <template #avatar>
                    <a-avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </a-descriptions-item>
        <a-descriptions-item label="3. Gün">
          <a-list item-layout="horizontal" :data-source="data">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta
                  description="Normal şekilde yapabilrdiğin ağırlıkla çalısabilirsin"
                >
                  <template #title>
                    <a href="https://www.antdv.com/">{{ item.title }}</a>
                  </template>
                  <template #avatar>
                    <a-avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </a-descriptions-item>
        <a-descriptions-item label="Hocanın notları">
          <p>
            İlk hafta için kendine yüklenme verilen programa harfiyen uygumana
            görek yok oncesinde kendini alışıtrımak için denemeler yapabilirsin
          </p>
        </a-descriptions-item>
        <a-descriptions-item label="Beslenme tavsiyesi">
          <p>
            İlk hafta için kendine yüklenme verilen programa harfiyen uygumana
            görek yok oncesinde kendini alışıtrımak için denemeler yapabilirsin
          </p>
        </a-descriptions-item>
      </a-descriptions>
    </a-collapse-panel>
    <a-collapse-panel key="1" header="3. Hafta">
      <a-descriptions title="Program Açıklması" bordered>
        <a-descriptions-item label="1. Gün">
          <a-list item-layout="horizontal" :data-source="data">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta
                  description="Normal şekilde yapabilrdiğin ağırlıkla çalısabilirsin"
                >
                  <template #title>
                    <a href="https://www.antdv.com/">{{ item.title }}</a>
                  </template>
                  <template #avatar>
                    <a-avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </a-descriptions-item>
        <a-descriptions-item label="2. Gün">
          <a-list item-layout="horizontal" :data-source="data">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta
                  description="Normal şekilde yapabilrdiğin ağırlıkla çalısabilirsin"
                >
                  <template #title>
                    <a href="https://www.antdv.com/">{{ item.title }}</a>
                  </template>
                  <template #avatar>
                    <a-avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </a-descriptions-item>
        <a-descriptions-item label="3. Gün">
          <a-list item-layout="horizontal" :data-source="data">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta
                  description="Normal şekilde yapabilrdiğin ağırlıkla çalısabilirsin"
                >
                  <template #title>
                    <a href="https://www.antdv.com/">{{ item.title }}</a>
                  </template>
                  <template #avatar>
                    <a-avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </a-descriptions-item>
        <a-descriptions-item label="Hocanın notları">
          <p>
            İlk hafta için kendine yüklenme verilen programa harfiyen uygumana
            görek yok oncesinde kendini alışıtrımak için denemeler yapabilirsin
          </p>
        </a-descriptions-item>
        <a-descriptions-item label="Beslenme tavsiyesi">
          <p>
            İlk hafta için kendine yüklenme verilen programa harfiyen uygumana
            görek yok oncesinde kendini alışıtrımak için denemeler yapabilirsin
          </p>
        </a-descriptions-item>
      </a-descriptions>
    </a-collapse-panel>
    <a-collapse-panel key="1" header="4. Hafta">
      <a-descriptions title="Program Açıklması" bordered>
        <a-descriptions-item label="1. Gün">
          <a-list item-layout="horizontal" :data-source="data">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta
                  description="Normal şekilde yapabilrdiğin ağırlıkla çalısabilirsin"
                >
                  <template #title>
                    <a href="https://www.antdv.com/">{{ item.title }}</a>
                  </template>
                  <template #avatar>
                    <a-avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </a-descriptions-item>
        <a-descriptions-item label="2. Gün">
          <a-list item-layout="horizontal" :data-source="data">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta
                  description="Normal şekilde yapabilrdiğin ağırlıkla çalısabilirsin"
                >
                  <template #title>
                    <a href="https://www.antdv.com/">{{ item.title }}</a>
                  </template>
                  <template #avatar>
                    <a-avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </a-descriptions-item>
        <a-descriptions-item label="3. Gün">
          <a-list item-layout="horizontal" :data-source="data">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta
                  description="Normal şekilde yapabilrdiğin ağırlıkla çalısabilirsin"
                >
                  <template #title>
                    <a href="https://www.antdv.com/">{{ item.title }}</a>
                  </template>
                  <template #avatar>
                    <a-avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </a-descriptions-item>
        <a-descriptions-item label="Hocanın notları">
          <p>
            İlk hafta için kendine yüklenme verilen programa harfiyen uygumana
            görek yok oncesinde kendini alışıtrımak için denemeler yapabilirsin
          </p>
        </a-descriptions-item>
        <a-descriptions-item label="Beslenme tavsiyesi">
          <p>
            İlk hafta için kendine yüklenme verilen programa harfiyen uygumana
            görek yok oncesinde kendini alışıtrımak için denemeler yapabilirsin
          </p>
        </a-descriptions-item>
      </a-descriptions>
    </a-collapse-panel>
  </a-collapse>
</template>

<script>
import { Avatar, Collapse, Descriptions, List } from "ant-design-vue";

export default {
  name: "Program",
  components: {
    aCollapse: Collapse,
    aCollapsePanel: Collapse.Panel,
    aDescriptions: Descriptions,
    aDescriptionsItem: Descriptions.Item,
    aList: List,
    aListItem: List.Item,
    aListItemMeta: List.Item.Meta,
    aAvatar: Avatar,
  },
  data() {
    return {
      activeKey: ["1"],
      data: [
        {
          title: "Squat 3x5",
        },
        {
          title: "Bench Press 3x5",
        },
        {
          title: "Pendlay Row 3x5",
        },
        {
          title: "Ağırlıklı Plank",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
