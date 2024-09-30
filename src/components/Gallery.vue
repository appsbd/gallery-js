<template :options="{
        Carousel: {
          infinite: true,
        },
      }">
  <div class="apbd-image-gallery-container" :class="gallery_options.gallery_style" ref="container">
    <div class="apbd-gallery">
      <div class="apbd-img-container" v-if="gallery_options.type == 'image'" v-for="image in gallery_options?.images">
        <a data-fancybox="gallery" :href="image">
          <img :src="image"/>
        </a>
      </div>
      <div class="apbd-img-container" v-if="gallery_options.type == 'video'" v-for="video in gallery_options?.videos">
        <a data-fancybox="gallery" :href="video.link">
          <img :src="video.thumbnail"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {Fancybox} from "@fancyapps/ui";
import '@fancyapps/ui/dist/fancybox/fancybox.css';

export default {
  name: "Gallery",
  props: {
    gallery_options: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {}
  },
  mounted() {
    Fancybox.bind(this.$refs.container, '[data-fancybox]', {
      ...(this.options || {}),
    });
  },
  updated() {
    Fancybox.unbind(this.$refs.container);
    Fancybox.close();

    Fancybox.bind(this.$refs.container, '[data-fancybox]', {
      ...(this.options || {}),
    });
  },
  unmounted() {
    Fancybox.destroy();
  },
}
</script>

<style scoped lang="scss">
.apbd-image-gallery-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--apbd-img-gallery-container-bg, #e9e9e9);

  a {
    > img {
      border-radius: var(--apbd-img-border-radius, 10px);
      box-shadow: var(--apbd-img-shadow, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px);
    }
  }
}

@import "src/assets/css/components/gallery_default";
@import "src/assets/css/components/gallery_justified";
@import "src/assets/css/components/gallery_masonry";
</style>