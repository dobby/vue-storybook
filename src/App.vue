<script setup lang="ts">

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
</script>

<template>
  <h1 class="text-3xl text-indigo-800 font-bold underline">
    Hello world!
  </h1>
  <Button>Button</Button>

  <div class="bg-marcando text-marcando-foreground">
    A WARNING MATE
  </div>
  <div class="bg-marcando-secondary text-marcando-foreground">
    A WARNING MATE
  </div>
  <div class="bg-marcando-light text-marcando-secondary">
    A WARNING MATE
  </div>

  <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardContent>
      Card Content
    </CardContent>
    <CardFooter>
      Card Footer
    </CardFooter>
  </Card>


</template>

<style scoped>

</style>
