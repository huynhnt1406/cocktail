<template>
  <div class="searchbar">
    <div class="search-tool">
        <a-icon type="search"  />
        <input type="text" placeholder="Search..." >
    </div>
    <div class="icons">
        <a-avatar shape="square" icon="user" type="user" style="color:black ;backgroundColor:transparent; border-radius:7px "  />
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.searchbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.search-tool{
    height: 10px;
}
</style>