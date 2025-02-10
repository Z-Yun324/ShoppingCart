<template>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <th>商品名稱</th>
          <th>訂單編號</th>
          <th>買家編號</th>
          <th>確認時間</th>
          <th>物流方式</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <td>商品 A</td>
          <td>#123456</td>
          <td>Buyer001</td>
          <td>2025-01-10 14:30</td>
          <td>宅配</td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
        <!-- row 2 -->
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <td>商品 B</td>
          <td>#123457</td>
          <td>Buyer002</td>
          <td>2025-01-11 09:15</td>
          <td>超商取貨</td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
        <!-- row 3 -->
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <td>商品 C</td>
          <td>#123458</td>
          <td>Buyer003</td>
          <td>2025-01-12 18:45</td>
          <td>宅配</td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
        <!-- row 4 -->
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <td>商品 D</td>
          <td>#123459</td>
          <td>Buyer004</td>
          <td>2025-01-13 10:00</td>
          <td>超商取貨</td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
// 可在此添加任何邏輯處理
</script>
