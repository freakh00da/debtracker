<template>
  <div class="">
    <div class="collapse collapse-arrow bg-base-200 border-2 border-solid my-1">
      <input type="radio" name="my-accordion-2" />
      <div class="collapse-title text-xl font-medium">
        a new friend request from John Doe
      </div>
      <div class="collapse-content">
        <FriendNotification />
      </div>
    </div>
    <div class="collapse collapse-arrow bg-base-200 border-2 border-solid my-1">
      <input type="radio" name="my-accordion-2" />
      <div class="collapse-title text-xl font-medium">
        a new debt request from Alex
      </div>
      <div class="collapse-content">
        <DebtNotification />
      </div>
    </div>
    <div class="collapse collapse-arrow bg-base-200 border-2 border-solid my-1">
      <input type="radio" name="my-accordion-2" />
      <div class="collapse-title text-xl font-medium">
        James will pay the debt
      </div>
      <div class="collapse-content">
        <PayNotification />
      </div>
    </div>
  </div>
</template>
