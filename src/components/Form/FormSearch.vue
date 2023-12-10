<template>
  <q-card flat>
    <q-card-section>
      <div class="text-h5 text-grey-8">Reservar Hotel</div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <div class="row q-col-gutter-lg">
        <!-- INPUT SLOT -->
        <div class="col-12">
          <slot />
        </div>

        <!-- BUTTON ACTION SLOT -->
        <div class="col-12 flex justify-end">
          <slot name="action" />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
