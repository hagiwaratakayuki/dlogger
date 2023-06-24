<script>
  import {Modal } from 'sveltestrap';
  export let message = ''; 
  /**
   * @type {'primary' | 'danger' | 'info' }
   */
  export let color = 'danger';
  export let isOpen = false;
  function toggle () {
    isOpen = false; 
  }
</script>


 
<Modal body header="Modal title" isOpen={isOpen} {toggle}><p class={"color-text-" + color}>{message}</p></Modal>
