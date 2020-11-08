import "reflect-metadata";
import Startup from './startup';

const port = parseInt(process.env.PORT) | 3333;

Startup.app.listen(port, () => {
	console.log(`Aplicação iniciada na porta ${port}`);
});

process.once('SIGUSR2', () => Startup.closedataBaseConnection('restart', () => process.kill(process.pid, 'SIGUSR2')));
process.once('SIGINT', () => Startup.closedataBaseConnection('connection crashed', () => process.exit(0)));