<template>
  <div v-if="authCustomer.trainerId">
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
              görek yok oncesinde kendini alışıtrımak için denemeler
              yapabilirsin
            </p>
          </a-descriptions-item>
          <a-descriptions-item label="Beslenme tavsiyesi">
            <p>
              İlk hafta için kendine yüklenme verilen programa harfiyen uygumana
              görek yok oncesinde kendini alışıtrımak için denemeler
              yapabilirsin
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
              görek yok oncesinde kendini alışıtrımak için denemeler
              yapabilirsin
            </p>
          </a-descriptions-item>
          <a-descriptions-item label="Beslenme tavsiyesi">
            <p>
              İlk hafta için kendine yüklenme verilen programa harfiyen uygumana
              görek yok oncesinde kendini alışıtrımak için denemeler
              yapabilirsin
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
              görek yok oncesinde kendini alışıtrımak için denemeler
              yapabilirsin
            </p>
          </a-descriptions-item>
          <a-descriptions-item label="Beslenme tavsiyesi">
            <p>
              İlk hafta için kendine yüklenme verilen programa harfiyen uygumana
              görek yok oncesinde kendini alışıtrımak için denemeler
              yapabilirsin
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
              görek yok oncesinde kendini alışıtrımak için denemeler
              yapabilirsin
            </p>
          </a-descriptions-item>
          <a-descriptions-item label="Beslenme tavsiyesi">
            <p>
              İlk hafta için kendine yüklenme verilen programa harfiyen uygumana
              görek yok oncesinde kendini alışıtrımak için denemeler
              yapabilirsin
            </p>
          </a-descriptions-item>
        </a-descriptions>
      </a-collapse-panel>
    </a-collapse>
  </div>
  <div v-else>
    <a-result
      title="Hiç bir eğitmenimizden ders almıyorsunuz.Program için bir eğitmen seçiniz."
    >
      <template #extra>
        <a-button key="console" type="primary" @click="openModal"
          >Eğitmen Seç</a-button
        >
      </template>
      <a-modal v-model="modalVisible" title="Basic Modal" @ok="handleOk">
        <div v-for="trainer in trainers">
          <a-list-item>
            <template #actions>
              <a-button @click="addTrainer(trainer.id)">
                Öneri İste
              </a-button>
            </template>
            <a-list-item-meta
              :description="`${trainer.name} ${trainer.lastName} `"
            >
              <template #title>
                <a href="https://www.antdv.com/">{{ trainer.username }}</a>
              </template>
              <template #avatar>
                <a-avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
              </template>
            </a-list-item-meta>
          </a-list-item>
        </div>
      </a-modal>
    </a-result>
  </div>
</template>

<script>
import {
  Avatar,
  Button,
  Collapse,
  Descriptions,
  List,
  Result,
} from "ant-design-vue";
import { mapState } from "vuex";
import axios from "axios";
import request from "../../utils/request";

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
    aResult: Result,
    aButton: Button,
  },
  data() {
    return {
      modalVisible: false,
      trainers: [],
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
  methods: {
    handleOk() {
      this.modalVisible = false;
    },
    async getTrainers() {
      const trainers = await request.get(`/customers/`);
      this.trainers = trainers.data;
    },
    async openModal() {
      await this.getTrainers();
      this.modalVisible = true;
    },
    addTrainer(trainerId){

    }
  },
  computed: {
    ...mapState({
      authCustomer: "authCustomer",
    }),
  },
};
</script>

<style scoped></style>
