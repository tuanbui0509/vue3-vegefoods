<template>
  <!-- Modal -->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" >
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Something inform you</h5>
					<!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button> -->
				</div>
				<div class="modal-body">
					<slot :dialogTitle="title"></slot>
				</div>
				<div class="modal-footer">
					<button type="button" @click="closeDialog" class="btn btn-secondary" >Close</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  import $ from "jquery";

  export default {
    name: 'Dialog',
    props: ['message', 'openDialog'],
    data() {
      return {
        title: 'My own title'
      }
    },
    watch: {
      openDialog(newStatus, oldStatus) {
        if (oldStatus !== newStatus) {
          this.showDialog(newStatus)
        }
      }
    },
    methods: {
      showDialog(value) {
        if (value) {
          $('#myModal').modal({ keyboard: false, show: true })
          $("#myModal").appendTo("body");
        } else {
          $('#myModal').modal('hide')
        }
  		},

      closeDialog() {
        this.$emit('closeDialog', false)
      }
    }
  }
</script>
