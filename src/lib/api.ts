// Mock API service to simulate backend functionality

// Types
export type User = {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'mentor' | 'alumni';
  avatarUrl?: string;
  bio?: string;
  department?: string;
  joinedDate?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  teamMembers: {
    id: string;
    name: string;
    role: string;
    avatarUrl?: string;
  }[];
};

// Mock data
const users: User[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex@example.edu',
    role: 'student',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
    bio: 'Computer Science student specializing in AI and machine learning',
    department: 'Computer Science',
    joinedDate: '2023-09-01',
  },
  {
    id: '2',
    name: 'Maria Garcia',
    email: 'maria@example.edu',
    role: 'student',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
    bio: 'Studying Human-Computer Interaction and UX Design',
    department: 'Information Science',
    joinedDate: '2023-08-15',
  },
  {
    id: '3',
    name: 'Dr. James Wilson',
    email: 'james@example.edu',
    role: 'mentor',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    bio: 'Professor of Computer Science with expertise in distributed systems',
    department: 'Computer Science',
    joinedDate: '2021-01-10',
  },
  {
    id: '4',
    name: 'Sarah Chen',
    email: 'sarah@example.edu',
    role: 'alumni',
    avatarUrl: 'https://i.pravatar.cc/150?img=9',
    bio: 'Software Engineer at TechCorp, graduated 2022',
    department: 'Computer Science',
    joinedDate: '2018-09-01',
  },
  {
    id: '5',
    name: 'David Kim',
    email: 'david@example.edu',
    role: 'student',
    avatarUrl: 'https://i.pravatar.cc/150?img=7',
    bio: 'Researching applications of blockchain in supply chain',
    department: 'Information Systems',
    joinedDate: '2022-09-01',
  },
  {
    id: '6',
    name: 'Prof. Emma Brown',
    email: 'emma@example.edu',
    role: 'mentor',
    avatarUrl: 'https://i.pravatar.cc/150?img=10',
    bio: 'Specializing in data science and statistical analysis',
    department: 'Statistics',
    joinedDate: '2019-07-15',
  },
  {
    id: '7',
    name: 'Michael Lee',
    email: 'michael@example.edu',
    role: 'alumni',
    avatarUrl: 'https://i.pravatar.cc/150?img=11',
    bio: 'Product Manager at InnovateTech, class of 2021',
    department: 'Information Science',
    joinedDate: '2017-09-01',
  },
];

// Mock projects data
const projects: Project[] = [
  {
    id: "1",
    title: "Smart Campus Navigation System",
    description: "A mobile app using AR technology to help students navigate campus buildings and locate resources.",
    imageUrl: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop",
    category: "Mobile App",
    teamMembers: [
      { id: "u1", name: "Alex Johnson", role: "Team Lead", avatarUrl: "https://i.pravatar.cc/150?img=1" },
      { id: "u2", name: "Maria Garcia", role: "UI Designer", avatarUrl: "https://i.pravatar.cc/150?img=5" },
      { id: "u3", name: "David Kim", role: "Developer", avatarUrl: "https://i.pravatar.cc/150?img=7" },
    ],
  },
  {
    id: "2",
    title: "EcoTrack: Campus Sustainability Dashboard",
    description: "Real-time monitoring system for tracking and visualizing campus energy usage and sustainability metrics.",
    imageUrl: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2094&auto=format&fit=crop",
    category: "Web Application",
    teamMembers: [
      { id: "u4", name: "Sarah Chen", role: "Data Scientist", avatarUrl: "https://i.pravatar.cc/150?img=9" },
      { id: "u5", name: "James Wilson", role: "Frontend Dev", avatarUrl: "https://i.pravatar.cc/150?img=12" },
      { id: "u6", name: "Emma Brown", role: "UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=10" },
      { id: "u7", name: "Michael Lee", role: "Backend Dev", avatarUrl: "https://i.pravatar.cc/150?img=11" },
    ],
  },
  {
    id: "3",
    title: "Virtual Science Laboratory",
    description: "VR platform for conducting physics and chemistry experiments virtually with real-time collaboration.",
    imageUrl: "https://images.unsplash.com/photo-1581091878591-4f0714c6f35b?q=80&w=2070&auto=format&fit=crop",
    category: "VR Application",
    teamMembers: [
      { id: "u8", name: "Daniel Carter", role: "VR Developer", avatarUrl: "https://i.pravatar.cc/150?img=15" },
      { id: "u9", name: "Olivia Martinez", role: "3D Artist", avatarUrl: "https://i.pravatar.cc/150?img=20" },
      { id: "u10", name: "William Taylor", role: "Educator", avatarUrl: "https://i.pravatar.cc/150?img=22" },
    ],
  },
  {
    id: "4",
    title: "StudyBuddy: Peer Learning Platform",
    description: "Platform connecting students for collaborative study sessions and peer tutoring across departments.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    category: "Web Application",
    teamMembers: [
      { id: "u11", name: "Sophia Rodriguez", role: "Project Manager", avatarUrl: "https://i.pravatar.cc/150?img=25" },
      { id: "u12", name: "Noah Williams", role: "Full Stack Dev", avatarUrl: "https://i.pravatar.cc/150?img=30" },
      { id: "u13", name: "Isabella Clark", role: "UI/UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=32" },
    ],
  },
  {
    id: "5",
    title: "Campus Waste Management Optimization",
    description: "IoT-based system for monitoring waste bins and optimizing collection routes to improve sustainability.",
    imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop",
    category: "IoT Solution",
    teamMembers: [
      { id: "u14", name: "Liam Johnson", role: "Hardware Engineer", avatarUrl: "https://i.pravatar.cc/150?img=50" },
      { id: "u15", name: "Ava Miller", role: "Data Analyst", avatarUrl: "https://i.pravatar.cc/150?img=44" },
      { id: "u16", name: "Mason Davis", role: "Software Dev", avatarUrl: "https://i.pravatar.cc/150?img=59" },
      { id: "u17", name: "Charlotte White", role: "UI Designer", avatarUrl: "https://i.pravatar.cc/150?img=47" },
    ],
  },
  {
    id: "6",
    title: "AI-Powered Academic Advisor",
    description: "Intelligent system providing personalized course recommendations and academic planning assistance.",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop",
    category: "AI Application",
    teamMembers: [
      { id: "u18", name: "Ethan Brown", role: "AI Engineer", avatarUrl: "https://i.pravatar.cc/150?img=61" },
      { id: "u19", name: "Mia Thompson", role: "Backend Dev", avatarUrl: "https://i.pravatar.cc/150?img=60" },
      { id: "u20", name: "Lucas Garcia", role: "Frontend Dev", avatarUrl: "https://i.pravatar.cc/150?img=62" },
    ],
  },
  {
    id: "7",
    title: "Accessible Campus Map",
    description: "Interactive map highlighting accessible routes, entrances, and facilities for students with disabilities.",
    imageUrl: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=2069&auto=format&fit=crop",
    category: "Web Application",
    teamMembers: [
      { id: "u21", name: "Emily Davis", role: "UX Researcher", avatarUrl: "https://i.pravatar.cc/150?img=39" },
      { id: "u22", name: "Jacob Martinez", role: "Developer", avatarUrl: "https://i.pravatar.cc/150?img=67" },
      { id: "u23", name: "Madison Smith", role: "Accessibility Expert", avatarUrl: "https://i.pravatar.cc/150?img=46" },
    ],
  },
  {
    id: "8",
    title: "SmartClass: Lecture Enhancement Platform",
    description: "System that uses AI to generate real-time notes, summaries, and related resources during lectures.",
    imageUrl: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974&auto=format&fit=crop",
    category: "Education Tech",
    teamMembers: [
      { id: "u24", name: "Benjamin Moore", role: "Full Stack Dev", avatarUrl: "https://i.pravatar.cc/150?img=59" },
      { id: "u25", name: "Abigail Jackson", role: "AI Specialist", avatarUrl: "https://i.pravatar.cc/150?img=44" },
      { id: "u26", name: "Samuel Wilson", role: "Education Consultant", avatarUrl: "https://i.pravatar.cc/150?img=53" },
      { id: "u27", name: "Elizabeth Taylor", role: "UI Designer", avatarUrl: "https://i.pravatar.cc/150?img=46" },
    ],
  },
];

// API mock functions with simulated delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  // Auth functions
  login: async (email: string, password: string) => {
    await delay(1000); // Simulate network delay
    
    const user = users.find(u => u.email === email);
    if (user && password === 'password') { // Simple mock password check
      return { user, token: 'mock-jwt-token' };
    }
    throw new Error('Invalid credentials');
  },
  
  register: async (name: string, email: string, password: string, role: 'student' | 'mentor' | 'alumni') => {
    await delay(1500);
    
    if (users.some(u => u.email === email)) {
      throw new Error('User already exists');
    }
    
    const newUser: User = {
      id: `${users.length + 1}`,
      name,
      email,
      role,
      joinedDate: new Date().toISOString().split('T')[0],
    };
    
    users.push(newUser);
    return { user: newUser, token: 'mock-jwt-token' };
  },
  
  // User functions
  getUser: async (id: string) => {
    await delay(800);
    const user = users.find(u => u.id === id);
    if (!user) throw new Error('User not found');
    return user;
  },
  
  updateUser: async (id: string, updates: Partial<User>) => {
    await delay(1200);
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) throw new Error('User not found');
    
    users[userIndex] = { ...users[userIndex], ...updates };
    return users[userIndex];
  },
  
  // Project functions
  getProjects: async () => {
    await delay(1000);
    return projects;
  },
  
  getProject: async (id: string) => {
    await delay(800);
    const project = projects.find(p => p.id === id);
    if (!project) throw new Error('Project not found');
    return project;
  },
  
  // Other user-related functions
  getMentors: async () => {
    await delay(1200);
    return users.filter(u => u.role === 'mentor');
  },
  
  getAlumni: async () => {
    await delay(1200);
    return users.filter(u => u.role === 'alumni');
  },
};
