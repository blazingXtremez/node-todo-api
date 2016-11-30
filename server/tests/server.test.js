const expect = require('expect');
const request = require('supertest');
const {ObjectId} = require('mongodb');
const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
	_id : new ObjectId(),
	text : 'First test todo'
},{
	_id : new ObjectId(),
	text : 'Second test todo'
}];

// start with 0 todos for testing
beforeEach((done) => {
	Todo.remove({}).then(() => {
		return Todo.insertMany(todos);
	}).then(() => done());
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

			Todo.find({text}).then((todos) => {
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
			.expect(400)
			.end((err, res) => {
				if (err){
					return done(err);
				}

				Todo.find().then((todos) =>{
					expect(todos.length).toBe(2);
					done();
				}).catch((e) => done(e));
			});
	});
});

// new describe block
describe('GET /todos', () =>{
	it ('should get all the todos', (done)=>{
		request(app)
			.get('/todos')
			.expect(200)
			.expect((res) => {
				expect(res.body.todos.length).toBe(2);
			})
			.end(done);
	});
});


describe('GET /todos:id', () => {
	it ('should return todo doc', (done) => {
		request(app)
			.get(`/todos/${todos[0]._id.toHexString()}`)
			.expect(200)
			.expect((res) => {
				expect(res.body.todo.text).toBe(todos[0].text);
			})
			.end(done);
	});

	it ('should return 404 if todo not found', (done) => {
		// make sure you get a 404 status back
		request(app)
			.get(`/todos/${new ObjectId().toHexString()}`)
			.expect(404)
			.end(done);
	});

	it ('should return 404 for non object id', (done) => {
		// todos/123
		// staus code 404
		request(app)
			.get(`/todos/1234`)
			.expect(404)
			.end(done);
	});

});