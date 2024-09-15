module.exports.handler = async (event, context, callback) => {
	let eventJson = JSON.stringify(event);
	console.log(eventJson);

	return{
		statusCode: 200,
		body: JSON.stringify(event)
	};
};