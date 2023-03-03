<template>
    <div class="navbar">
        <div class="head clearfix">
        <h1 class="pulll_left">互联网与移动GIS开发作业展示</h1>
        <div class="menu menu2 pulll_left">
        <ul>      
            <li><router-link to="/json">Json格式展示</router-link></li>
            <!-- <li><router-link to="/buildSituation">建设情况</router-link></li>
            <li><router-link to="/statistic">数据统计</router-link></li>
            <li><router-link to="/statistic">视频监控</router-link></li> -->

        </ul>
        </div>
    
        </div>
    </div>
</template>


<script>
export default {
    created(){
      
    },
    data(){
        return{
           
        }
    },
    methods:{
       
    }

}
</script>

<style src="../../style/style.css">
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
}

</style>