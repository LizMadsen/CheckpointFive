<template>
  <div class="subliminalMessage"></div>
</template>


<script>
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
export default {
  setup() {
    return {
      async getOne() {
        try {
          await subliminalMessageService.getAll();
        } catch (error) {
          logger.log(error);
          Pop.toast(error.message, "Error, man");
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>