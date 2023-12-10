<template>
  <q-card flat>
    <q-card-section>
      <div class="text-h5 text-grey-8">Reservar Hotel</div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <div class="row q-col-gutter-lg">
        <!-- Input -->
        <div class="col-12">
          <slot />
        </div>

        <!-- Button -->
        <div class="col-12 flex justify-end">
          <slot name="action">
            <q-btn class="q-px-lg" unelevated rounded color="primary"
              label="Buscar" @click="$emit('action')" />
          </slot>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss"></style>
