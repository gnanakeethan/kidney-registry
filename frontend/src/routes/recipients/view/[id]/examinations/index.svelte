<script lang="ts">
	import { recipientId } from '../../../../../lib/state/recipient';
</script>

<div class="p-2">
	<div class=" p-2">
		DONORS {$recipientId}
		<a href="/recipients/view/{$recipientId}/examinations/{$recipientId}">Donor</a>
	</div>
	<style>
		.select-size input {
			display: none;
		}

		#small:checked ~ label[for='small'],
		#medium:checked ~ label[for='medium'],
		#large:checked ~ label[for='large'],
		#x-large:checked ~ label[for='x-large'],
		#xx-large:checked ~ label[for='xx-large'] {
			background: rgb(44, 3, 226);
			color: #fff;
		}
	</style>
	<div class="select-size">
		<input checked id="medium" name="s-size" type="checkbox" />
		<input id="large" name="s-size" type="checkbox" />
		<input id="x-large" name="s-size" type="checkbox" />
		<input id="xx-large" name="s-size" type="checkbox" />

		<label
			class="inline-block  cursor-pointer rounded-full border px-2 py-1 text-center"
			for="medium">Headache</label
		>
		<label
			class="inline-block  cursor-pointer rounded-full border px-2 py-1 text-center"
			for="large">Fits</label
		>
		<label
			class="inline-block  cursor-pointer rounded-full border px-2 py-1 text-center"
			for="x-large">Weakness</label
		>
		<label
			class="inline-block  cursor-pointer rounded-full border px-2 py-1 text-center"
			for="xx-large">Numbness</label
		>
	</div>
</div>
