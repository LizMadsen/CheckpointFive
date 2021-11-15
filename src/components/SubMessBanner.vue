<template>
  <img
    class="subMessFit"
    :src="subMessage.banner"
    alt="sublimninal message picture"
  />
</template>


<script>
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
export default {
  props: { subMessage: { type: Object, required: true } },
  setup() {
    return {
      async getOne() {
        try {
          await subliminalMessageService.getAll();
        } catch (error) {
          // logger.log(error);
          Pop.toast(error.message, "Error, man");
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
.subMessFit {
  max-width: 100%;
}
</style>