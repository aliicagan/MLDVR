<template>
  <div>
    <div class="tabs">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{'active': activeTab === index}"
        @click="changeTab(index)"
      >
        {{ tab.title }}
      </div>
    </div>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      tabs: [],
    };
  },
  methods: {
    changeTab(index) {
      this.activeTab = index;
    },
  },
  mounted() {
    // İçerikleri burada belirleyebilirsiniz
    this.tabs = [
      { title: 'Tab 1' },
      { title: 'Tab 2' },
      { title: 'Tab 3' },
    ];
  },
};
</script>

<style>
.tabs {
  display: flex;
}

.tabs div {
  padding: 10px;
  cursor: pointer;
}

.tabs div.active {
  background-color: #eee;
}

.tab-content {
  margin-top: 10px;
  border: 1px solid #ddd;
  padding: 10px;
}
</style>