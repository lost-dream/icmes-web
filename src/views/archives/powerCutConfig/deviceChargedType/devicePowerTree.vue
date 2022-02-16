<template>
  <PageWrapper contentFullHeight fixedHeight dense>
    <div class="h-full p-4 overflow-auto bg-white">
      <BasicTree
        ref="treeRef"
        search
        :treeData="treeData"
        :replace-fields="{ key: 'id' }"
        @select="handleSelect"
      />
    </div>
  </PageWrapper>
</template>

<script lang="ts">
  export default {
    name: 'DeviceTree',
  };
</script>

<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { ref, unref, nextTick } from 'vue';
  import { BasicTree, TreeActionType } from '/@/components/Tree';
  import { listToTreeAsParentId } from '/@/utils/helper/treeHelper';
  import { getDevicesPowerListApi } from '/@/api/info/devices';
  import { DevicePowerModel } from '/@/api/info/model/devicesModel';
  import { cloneDeep } from 'lodash-es';

  const loading = ref(false);
  const treeRef = ref<Nullable<TreeActionType>>(null);
  const treeData = ref<any[]>([]);

  const emit = defineEmits(['select']);

  function getTree() {
    const tree = unref(treeRef);
    if (!tree) throw new Error('tree is null');
    return tree;
  }

  async function getDevicesPowerList(params) {
    loading.value = true;
    try {
      const { items } = await getDevicesPowerListApi(params);
      console.log(items);
      // 给列表赋值 title 用于显示标题。除根节点（parentId === -1）外，子目录和部门均显示为 code + name
      const list: (DevicePowerModel & { title?: string; label?: string; key?: string })[] =
        cloneDeep(items) || [];
      list.map((item) => {
        item.title = item.parentId === 0 ? item.name : `${item.code} ${item.name}`;
        item.label = '';
      });
      treeData.value = listToTreeAsParentId(list, {
        parentId: 'categoryTreeParentId',
        id: 'categoryTreeId',
      });
      await nextTick();
      // 展开第一层 & 选中根节点(id === 0)
      getTree()?.filterByLevel(1);
      getTree()?.setSelectedKeys([0]);
    } catch (error) {}
  }

  const params = {
    ascending: true,
    category: [],
    globalName: '',
    needTree: true,
    orderBy: 'processNo',
    organizationIds: [],
    pageNo: 0,
    pageSize: 0,
    parentId: -1,
  };

  getDevicesPowerList(params);

  function handleSelect(selecttsIds) {
    emit('select', selecttsIds[0]);
  }
</script>