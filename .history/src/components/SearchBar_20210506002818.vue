<template>
  <div class="searchbar">
    <div class="search-tool">
        <a-icon type="search"  />
        <input type="text" placeholder="Search..." >
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
    padding-left:20px;
    padding-right: 20px;
}
.search-tool input{
    height: 30px;
    width: 300px;
    background-color: transparent;
    border-left:none;
    border-right: none;
    border-top:none;
    border-bottom: 2px solid black;
    box-shadow: 0 2px 2px rgba(0,0,0,.5);
    margin-left: 10px;
    outline: none;
}
.search-tool input:focus{
    border-bottom: 2px solid green;
}
</style>