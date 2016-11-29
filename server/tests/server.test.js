const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

// start with 0 todos for testing
beforeEach((done) => {
	Todo.remove({}).then(() => done());
});

// using describe to group the tests
describe('POST /todos', () => {
	it('should create a new todo', (done) => {
		var text = 'Test Text for todo';

		request(app)	
			.post('/todos')
			.send({text})
			.expect(200)
			.expect((res) => {
				expect(res.body.text).toBe(text);
			})
			.end((err, res) => {
				if (err){
					return done(err);
				}	

			Todo.find().then((todos) => {
				expect(todos.length).toBe(1);
				expect(todos[0].text).toBe(text);
				done();
			}).catch((e) => done(e));

		});
	
	});


	it('should not create a todo with invalid data', (done) => {
		request(app)
			.post('/todos')
			.send({})
			.expect(200)
			.end((err, res) => {
				if (err){
					return done(err);
				}

				Todo.find().then((todos) =>{
					expect(todos.length).toBe(0);
					done();
				}).catch((e) => done(e));
			});
	});
});