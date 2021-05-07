<template>
  <div class="searchbar">
    <div class="search-tool">
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
    padding-left:10px;
    padding-right: 10px;
}
.search-tool input{
    height: 30px;
    width: 300px;
    background-color: transparent;
    border-left:none;
    border-right: none;
    border-top:none;
    border-bottom: 2px solid black;
    margin-left: 10px;
    outline: none;
}
.search-tool input:focus{
    border-bottom: 2px solid green;
}
</style>