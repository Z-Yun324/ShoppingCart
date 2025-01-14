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
          <th>訂單編號</th>
          <th>買家編號</th>
          <th>付款狀態</th>
          <th>商品明細</th>
          <th>金額</th>
          <th>物流方式</th>
          <th>狀態</th>
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
          <td>#123456</td>
          <td>Buyer001</td>
          <td>
            <span class="badge badge-success">已付款</span>
          </td>
          <td>商品 A, 商品 B</td>
          <td>$1500</td>
          <td>宅配</td>
          <td>
            <span class="badge badge-info">處理中</span>
          </td>
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
          <td>#123457</td>
          <td>Buyer002</td>
          <td>
            <span class="badge badge-warning">待付款</span>
          </td>
          <td>商品 C, 商品 D</td>
          <td>$2200</td>
          <td>超商取貨</td>
          <td>
            <span class="badge badge-warning">待處理</span>
          </td>
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
          <td>#123458</td>
          <td>Buyer003</td>
          <td>
            <span class="badge badge-success">已付款</span>
          </td>
          <td>商品 E</td>
          <td>$800</td>
          <td>宅配</td>
          <td>
            <span class="badge badge-success">已完成</span>
          </td>
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
          <td>#123459</td>
          <td>Buyer004</td>
          <td>
            <span class="badge badge-success">已付款</span>
          </td>
          <td>商品 F, 商品 G</td>
          <td>$3500</td>
          <td>超商取貨</td>
          <td>
            <span class="badge badge-info">處理中</span>
          </td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
// 可以根據需要在此處增加任何邏輯
</script>
