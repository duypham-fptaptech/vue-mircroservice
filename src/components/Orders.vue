<template>
  <div class="breadcrumb-section breadcrumb-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2 text-center">
          <div class="breadcrumb-text">
            <p>Fresh and Organic</p>
            <h1>Cart</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end breadcrumb section -->

  <!-- cart -->
  <div class="cart-section mt-150 mb-150">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="cart-table-wrap">
            <table class="cart-table">
              <thead class="cart-table-head">
              <tr class="table-head-row">
                <th class="product-image">Product Image</th>
                <th class="product-name">Name</th>
                <th class="product-price">Price</th>
                <th class="product-total">Action</th>
              </tr>
              </thead>
              <tbody>
                <tr class="table-body-row" :class="{ active: index === currentIndex }"
                    v-for="(order, index) in orders" v-bind:key="index">
                  <td class="product-image"><img :src="order.image" alt=""></td>
                  <td class="product-name">{{order.name}}</td>
                  <td class="product-price">{{order.price}} VND</td>
                  <td @click="removeFromCart(index)"><button>Remove</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="total-section">
            <table class="total-table">
              <thead class="total-table-head">
              <tr class="table-total-row">
              </tr>
              </thead>
              <tbody>
              <tr class="total-data">
                <label for="">Username: </label>
                <input type="text" name="userName" v-model="order.userName">
              </tr>
              </tbody>
            </table>
            <div class="cart-buttons">
              <button class="boxed-btn black" @click="checkout">Check out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end cart -->

  <!-- logo carousel -->
  <!-- end logo carousel -->

  <!-- footer -->
  <div class="footer-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <div class="footer-box about-widget">
            <h2 class="widget-title">About us</h2>
            <p>Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="footer-box get-in-touch">
            <h2 class="widget-title">Get in Touch</h2>
            <ul>
              <li>34/8, East Hukupara, Gifirtok, Sadan.</li>
              <li>support@fruitkha.com</li>
              <li>+00 111 222 3333</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="footer-box pages">
            <h2 class="widget-title">Pages</h2>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="services.html">Shop</a></li>
              <li><a href="news.html">News</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="footer-box subscribe">
            <h2 class="widget-title">Subscribe</h2>
            <p>Subscribe to our mailing list to get the latest updates.</p>
            <form action="index.html">
              <input type="email" placeholder="Email">
              <button type="submit"><i class="fas fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end footer -->

  <!-- copyright -->
  <div class="copyright">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <p>Copyrights &copy; 2019 - <a href="https://imransdesign.com/">Imran Hossain</a>,  All Rights Reserved.<br>
            Distributed By - <a href="https://themewagon.com/">Themewagon</a>
          </p>
        </div>
        <div class="col-lg-6 text-right col-md-12">
          <div class="social-icons">
            <ul>
              <li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
              <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
              <li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
              <li><a href="#" target="_blank"><i class="fab fa-linkedin"></i></a></li>
              <li><a href="#" target="_blank"><i class="fab fa-dribbble"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderDataService from "@/service/OrderDataService";

export default {
  name: "AddOrders",
  data() {
    return {
      orders: [],
      currentIndex: -1,
      order:
          {
            userName: "",
            published: true
          },
      submitted: false,
    };
    },
  methods: {
    getCart() {
      if (!localStorage.getItem("orders")) {
        localStorage.setItem("orders", JSON.stringify([]));
      }
      this.orders = JSON.parse(localStorage.getItem("orders"));
    },
    removeFromCart(productId) {
      const cartItems = JSON.parse(localStorage.getItem("orders"));
      const index = cartItems.findIndex(({ id }) => id === productId);
      cartItems.splice(index, 1);
      localStorage.setItem("orders", JSON.stringify(cartItems));
      this.orders = JSON.parse(localStorage.getItem("orders"));
    },
    checkout() {
      this.orders = JSON.parse(localStorage.getItem("orders"));
      var data = {
        userName: this.order.userName,
        items: this.orders
      };
      OrderDataService.checkout(data)
          .then(response => {
            this.orders.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      if (this.submitted == true){
        // localStorage.removeItem('orders')
        alert("Orders success")
      }
    }
  },
  beforeMount() {
    this.getCart();
  },
  }
</script>

<style scoped>

</style>