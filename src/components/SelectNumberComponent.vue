<template>
  <div class="seat-number-control">
    <button class="min-btn" @click="decreaseValue" :disabled="localValue <= 1">
      -
    </button>
    <input
      type="number"
      class="number-control"
      :value="localValue"
      @input="updateLocalValue($event)"
    />
    <button
      class="max-btn"
      @click="increaseValue"
      :disabled="localValue >= maxnumber"
    >
      +
    </button>
  </div>
</template>

<script>
export default {
  name: "SelectNumberComponent",
  props: {
    value: {
      type: Number,
      required: true,
    },
    maxnumber: {
      type: Number,
      required: true,
    },
    step: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      localValue: this.value || this.step,
    };
  },
  methods: {
    decreaseValue() {
      this.localValue -= this.step;
      this.emitUpdatedValue();
    },
    increaseValue() {
      this.localValue += this.step;
      this.emitUpdatedValue();
    },
    updateLocalValue(event) {
      const newValue = parseFloat(event.target.value);
      if (!isNaN(newValue)) {
        this.localValue = newValue;
        this.emitUpdatedValue();
      }
    },
    emitUpdatedValue() {
      this.$emit("input", this.localValue);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.seat-number-control {
  display: flex;
  align-items: center;
  gap: 0px;
  margin: auto;
  justify-content: center;
}
.min-btn {
  height: 30px;
  width: 40px;
  font-size: 30px;
  background: rgb(231, 127, 127);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.max-btn {
  height: 30px;
  width: 40px;
  font-size: 15px;
  background: #57a957;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.number-control {
  width: 35px;
  height: 24px;
  text-align: center;
  border-left: 0px;
  border-right: 0px;
}
input[type="number"] {
  text-align: center;
}

@media (min-width: 1000px) {
  .seat-number-control {
    gap: 10px;
    font-size: 24px;
  }
  .min-btn {
    height: 40px;
    width: 50px;
    font-size: 40px;
  }
  .max-btn {
    height: 40px;
    width: 50px;
    font-size: 20px;
  }
  .number-control {
    width: 45px;
    height: 30px;
  }
}
</style>
