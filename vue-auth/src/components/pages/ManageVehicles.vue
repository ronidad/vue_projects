<template>
<the-headersider></the-headersider>


    <div class="md-layout">
    <div class="md-layout-item md-medium-size-33 md-small-size-30 md-xsmall-size-100">
      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">name</div>
          </md-card-header-text>
        </md-card-header>
        <md-card-content>
          <md-card-media>
            <img :src="image" height="250" />
          </md-card-media>
          <span>amount</span>
        </md-card-content>
        <!-- <md-card-actions> -->
        <md-button class="md-primary" >Add to Cart</md-button>
        <!-- </md-card-actions> -->
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "product",
  props: ["id", "registration", "owner", "description"],
  methods: {
    addToCart(id) {
      this.$store.dispatch("addToCart", id);
    }
  }
};
</script>

<style lang="scss" scoped>
.md-layout-item {
  min-height: 40px;
  margin-top: 4%;
  margin-bottom: 4%;
  width: 100%;
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
    .md-card-content {
      span {
        color: red;
        font-weight: bolder;
      }
      .md-card-media {
        img {
          width: 50%;
        }
      }
    }
  }
}
</style>



