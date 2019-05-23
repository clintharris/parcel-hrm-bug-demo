console.info('Web worker starting up!');

onmessage = (message) => {
  console.log('Web worker received message:', message);
};