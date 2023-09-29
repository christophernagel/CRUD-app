<script>
import FeedbackForm from "./components/FeedbackForm.svelte";
import FeedbackList from "./components/FeedbackList.svelte";
import FeedbackStats from "./components/FeedbackStats.svelte";

</script>

<main class="container">
	<h2 style="font-weight:400; font-size: 20px" >Hello! This is a generic CRUD feedback list that updates from a local store.</h2>
	<FeedbackForm />
	<FeedbackStats />
	<FeedbackList />
</main>

