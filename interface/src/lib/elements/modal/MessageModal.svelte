<script>
  import {Modal } from 'sveltestrap';
  export let message = ''; 
  /**
   * @type {'primary' | 'danger' | 'info' }
   */
  export let color = ''
  export let open = false;
  function toggle () {
    open = false; 
  }
</script>


 
<Modal body header="Modal title" isOpen={open} {toggle}><p class={"color-text-" + color}>{message}</p></Modal>
