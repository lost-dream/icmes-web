<!-- Access control component for fine-grained access control. -->
<script lang="ts">
  import type { PropType } from 'vue';
  import { defineComponent } from 'vue';
  import { RoleEnum } from '/@/enums/roleEnum';
  import { getSlot } from '/@/utils/helper/tsxHelper';

  export default defineComponent({
    name: 'AuthorityPermission',
    props: {
      /**
       * Specified role is visible
       * When the permission mode is the role mode, the value value can pass the role value.
       * When the permission mode is background, the value value can pass the code permission value
       * @default ''
       */
      value: {
        type: [Number, Array, String] as PropType<RoleEnum | RoleEnum[] | string | string[]>,
        default: '',
      },
    },
    setup(_props, { slots }) {
      /**
       * Render role button
       */
      function renderAuth() {
        return getSlot(slots);
      }

      return () => {
        // Role-based value control
        return renderAuth();
      };
    },
  });
</script>
