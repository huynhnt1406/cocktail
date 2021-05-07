<template>
  <div class="searchbar">
    <div class="search-tool">
        <a-icon type="search"  />
        <input type="text" placeholder="Search..." >
    </div>
    <div class="icons">
        <a-avatar shape="square" icon="user" type="user" style="color:black ;backgroundColor:transparent; border-radius:7px "  />
        <a-avatar shape="square" style="backgroundColor:#d35400 ;border-radius:7px " icon="fire" />
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.searchbar{
    padding:2vh 4vh 2vh 4vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex:1;
}
.search-tool {
    background-color: white;
    box-shadow: 0 1px 1px rgba(0,0,0,.5);
    padding:8px;
    flex:0.5;
    border-radius: 20px;
}
.search-tool input{
    width: 50%;
    background-color: transparent;
    border:none;
    outline:none;
}
</style>