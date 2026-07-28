<template>
  <section class="prop-table-section">
    <h2 class="demo-title-extra">Props 参数</h2>

    <!-- Desktop table -->
    <div class="prop-table-wrap">
      <table class="prop-table">
        <thead>
          <tr>
            <th>参数名</th>
            <th>类型</th>
            <th>默认值</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in data" :key="row.name">
            <td>
              <code class="prop-code">{{ row.name }}</code>
            </td>
            <td>
              <span class="prop-type">{{ row.type }}</span>
            </td>
            <td>
              <code class="prop-code">{{ row.default?.length ? row.default : '—' }}</code>
            </td>
            <td>{{ translatePropDescription(row.name, row.description) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mobile cards -->
    <div class="prop-cards">
      <div class="prop-card" v-for="row in data" :key="row.name">
        <div class="prop-card-header">
          <code class="prop-code">{{ row.name }}</code>
          <span class="prop-card-type">{{ row.type }}</span>
        </div>
        <p class="prop-card-desc">{{ translatePropDescription(row.name, row.description) }}</p>
        <div class="prop-card-default">
          <span class="prop-card-label">默认值：</span>
          <code class="prop-code">{{ row.default?.length ? row.default : '—' }}</code>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { translatePropDescription } from '@/i18n';

export type PropRow = {
  name: string;
  type: string;
  default: string;
  description: string;
};

defineProps<{ data: PropRow[] }>();
</script>
