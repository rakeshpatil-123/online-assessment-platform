//  const employees = [
//     {
//       "username": "john_doe",
//       "uniqueId": "emp001",
//       "email": "john.doe@example.com",
//       "description": "Software Developer with 3 years of experience in front-end development.",
//       "password": "john1234"
//     },
//     {
//       "username": "mary_smith",
//       "uniqueId": "emp002",
//       "email": "mary.smith@example.com",
//       "description": "Product Manager with expertise in Agile methodologies.",
//       "password": "mary1234"
//     },
//     {
//       "username": "james_bond",
//       "uniqueId": "emp003",
//       "email": "james.bond@example.com",
//       "description": "Senior Backend Developer with a strong background in Node.js and database management.",
//       "password": "bond007"
//     },
//     {
//       "username": "emma_jones",
//       "uniqueId": "emp004",
//       "email": "emma.jones@example.com",
//       "description": "UX/UI Designer focused on user-centered design and interactive prototypes.",
//       "password": "emma1234"
//     },
//     {
//       "username": "michael_clark",
//       "uniqueId": "emp005",
//       "email": "michael.clark@example.com",
//       "description": "DevOps Engineer with experience in cloud platforms and CI/CD pipelines.",
//       "password": "michael1234"
//     }
//   ]
// const admin =  {
//   "username": "admin_user",
//   "uniqueId": "admin001",
//   "email": "admin@example.com",
//   "description": "System administrator with full access to all application features.",
//   "password": "admin1234"
// }

// export const  setLocalStorage = () =>{
//   localStorage.setItem('Employee',JSON.stringify(employees))
//   localStorage.setItem('Admin',JSON.stringify(admin))
// }
// export const getLocalStorage = () => {
//   const data = localStorage.getItem("employees");
//   const employees = data ? JSON.parse(data) : null;
//   console.log(employees);

//   const data1 = localStorage.getItem("admin");
//   const admin = data1 ? JSON.parse(data1) : null;
//   console.log(admin);
// };
