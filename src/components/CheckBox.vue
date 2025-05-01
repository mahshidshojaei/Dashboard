<<template>
  <label class="flex items-center text-[14px] cursor-pointer relative">
    <input
        type="checkbox"
        v-model="checked"
        class="custom-checkbox"
    />
    <slot />
  </label>
</template>

<script setup>
import { ref } from 'vue';
const checked = ref(false);
</script>

<style scoped>
.custom-checkbox {
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-inline-end: 6px;
  position: relative;
  background-color: white;
  cursor: pointer;
}

.custom-checkbox:checked {
  background-color: #2563eb;
  border-color: #2563eb;
}

.check-icon {
  position: absolute;
  left: 3px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}
</style>
