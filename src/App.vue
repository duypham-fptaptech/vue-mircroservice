<template>
  <div id="app">
    <!--PreLoader-->
    <div class="loader">
      <div class="loader-inner">
        <div class="circle"></div>
      </div>
    </div>
    <!--PreLoader Ends-->
      <HeaderLayout/>
      <router-view />
      <FooterLayout/>
  </div>
</template>

<script>

import HeaderLayout from "@/components/Header";
import FooterLayout from "@/components/Footer";
export default {
  name: 'App',
  components: {FooterLayout, HeaderLayout},
  methods: {
    loadJsFile(url) {
      let node = document.createElement('script');
      node.src = url;
      node.type = 'application/javascript';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  },
  mounted() {
    this.loadJsFile("assets/js/jquery-1.11.3.min.js")
    this.loadJsFile("assets/bootstrap/js/bootstrap.min.js")
    this.loadJsFile("assets/js/jquery.countdown.js")
    this.loadJsFile("assets/js/jquery.isotope-3.0.6.min.js")
    this.loadJsFile("assets/js/waypoints.js")
    this.loadJsFile("assets/js/owl.carousel.min.js")
    this.loadJsFile("assets/js/jquery.magnific-popup.min.js")
    this.loadJsFile("assets/js/jquery.meanmenu.min.js")
    this.loadJsFile("assets/js/sticker.js")
    this.loadJsFile("assets/js/main.js")
  }
}
</script>