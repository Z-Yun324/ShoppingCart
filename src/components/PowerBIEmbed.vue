<template>
  <div class="powerbi-container">
    <iframe
      title="房屋"
      width="1140"
      height="541.25"
      src="https://app.powerbi.com/reportEmbed?reportId=08cd1a72-181e-4e4f-9551-a9a3217cfe20&autoAuth=true&ctid=7133a892-b63e-41c7-a7e2-080836113358"
      frameborder="0"
      allowfullscreen="true"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "PowerBIEmbed",
};
</script>

<style scoped>
.powerbi-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
}
iframe {
  border: none;
}
</style>
