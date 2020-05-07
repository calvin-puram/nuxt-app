<template>
  <div class="input-control">
    <label><slot /></label>
    <input
      v-if="controlType === 'input'"
      :bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />

    <textarea
      v-if="controlType === 'textarea'"
      :value="value"
      row="10"
      @input="$emit('input', $event.target.value)"
    >
    </textarea>
  </div>
</template>

<script>
export default {
  props: {
    controlType: {
      type: String,
      default: 'input'
    },
    value: {
      type: String,
      required: true
    }
  },
  head() {
    return {
      title: 'Create Post'
    };
  }
};
</script>
<style scoped>
.input-control {
  margin: 10px 0;
}

.input-control label {
  display: block;
  font-weight: bold;
}

.input-control input,
.input-control textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid #ccc;
  padding: 5px;
}

.input-control input:focus,
.input-control textarea:focus {
  background-color: #eee;
  outline: none;
}
</style>
