<template>
  <NavBar />

  <div class="row">
    <div class="col-4">
      <img src="" alt="" />
    </div>
    <div class="col-4">
      <h4>
        Đồng hồ nam Hublot Big Bang Caviar Gold Diamond 41mm –
        346.px.0880.vr.1204
      </h4>
      <p>945,000,000₫ 667,000,000₫</p>
      <p>Tình trạng: còn hàng</p>
      <div>
        <button class="btn">Mua hang`</button>
      </div>
    </div>
    <div class="col-4">
      <h4>SẢN PHẨM NỔI BẬT</h4>
      <ListHotProduct />
    </div>
  </div>

  {{ product }}
  <Footer />
</template>

<script>
import Footer from "../components/commons/Footer";
import NavBar from "../components/commons/NavBar";
import ListHotProduct from "../components/ListHotProduct";
import axios from "axios";

export default {
  components: { Footer, NavBar, ListHotProduct },
  data() {
    return {
      product: Object,
    };
  },
  created() {
    axios
      .get(
        "https://078b52aae179.ngrok.io/api/product/" + this.$route.params.name
      )
      .then((responese) => (this.product = responese.data))
      .catch();
  },
};
</script>

<style></style>
