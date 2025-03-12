
// This file simulates backend API calls
// In a real app, you would replace these with actual API calls to your backend

// Types
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  year?: string;
  avatar?: string;
  bio?: string;
  location?: string;
  website?: string;
  github?: string;
  linkedin?: string;
  skills?: string[];
  education?: string;
  joinDate?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  imageUrl?: string;
  category: string;
  tags: string[];
  teamMembers: {
    id: string;
    name: string;
    role: string;
    avatarUrl?: string;
  }[];
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  department: string;
  expertise: string[];
  availability: string;
  imageUrl?: string;
}

export interface Alumnus {
  id: string;
  name: string;
  graduationYear: number;
  degree: string;
  company: string;
  role: string;
  location: string;
  skills: string[];
  availableForMentoring: boolean;
  imageUrl?: string;
}

export interface Discussion {
  id: string;
  title: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatarUrl?: string;
  };
  category: string;
  tags: string[];
  createdAt: string;
  replyCount: number;
  viewCount: number;
}

// Mock data storage (simulates a database)
const users: User[] = [
  {
    id: "1",
    name: "Alex Johnson",
    email: "alex.johnson@example.edu",
    role: "Computer Science Student",
    year: "Junior (3rd Year)",
    avatar: "",
    bio: "Passionate about creating user-friendly applications and exploring new technologies. Currently focused on machine learning and web development.",
    location: "University of California, Berkeley",
    email: "alex.johnson@berkeley.edu",
    website: "alexjohnson.dev",
    github: "alexjohnson",
    linkedin: "alex-johnson",
    skills: ["React", "JavaScript", "Python", "Machine Learning", "UI/UX Design", "Node.js"],
    education: "Bachelor of Science in Computer Science",
    joinDate: "September 2021",
  }
];

const projects: Project[] = [
  {
    id: "1",
    title: "Smart Campus Navigation",
    description: "A mobile app that helps students navigate campus efficiently with real-time updates about crowded areas.",
    thumbnail: "/placeholder.svg",
    imageUrl: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop",
    category: "Mobile App",
    tags: ["Mobile", "React Native", "Maps API"],
    teamMembers: [
      { id: "u1", name: "Alex Johnson", role: "Team Lead", avatarUrl: "https://i.pravatar.cc/150?img=1" },
      { id: "u2", name: "Maria Garcia", role: "UI Designer", avatarUrl: "https://i.pravatar.cc/150?img=5" },
      { id: "u3", name: "David Kim", role: "Developer", avatarUrl: "https://i.pravatar.cc/150?img=7" },
    ],
  },
  {
    id: "2",
    title: "Course Recommendation System",
    description: "AI-powered system that recommends courses based on student interests and career goals.",
    thumbnail: "/placeholder.svg",
    imageUrl: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2094&auto=format&fit=crop",
    category: "Web Application",
    tags: ["Python", "Machine Learning", "Data Analysis"],
    teamMembers: [
      { id: "u4", name: "Sarah Chen", role: "Data Scientist", avatarUrl: "https://i.pravatar.cc/150?img=9" },
      { id: "u5", name: "James Wilson", role: "Frontend Dev", avatarUrl: "https://i.pravatar.cc/150?img=12" },
    ],
  },
];

// API simulation functions
export const api = {
  // Auth functions
  login: async (email: string, password: string): Promise<User> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // In a real app, this would validate credentials against your backend
    if (email && password) {
      // Return mock user for now
      return users[0];
    }
    throw new Error("Invalid credentials");
  },
  
  register: async (name: string, email: string, password: string): Promise<User> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // In a real app, this would register a new user in your backend
    if (name && email && password) {
      // Return mock user for now
      return users[0];
    }
    throw new Error("Registration failed");
  },
  
  // User functions
  getCurrentUser: async (): Promise<User | null> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // In a real app, this would verify the current user's session
    return users[0]; // Mock always logged in
  },
  
  getUserProfile: async (userId: string): Promise<User> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const user = users.find(u => u.id === userId);
    if (user) return user;
    throw new Error("User not found");
  },
  
  // Project functions
  getProjects: async (): Promise<Project[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return projects;
  },
  
  getProjectById: async (projectId: string): Promise<Project> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const project = projects.find(p => p.id === projectId);
    if (project) return project;
    throw new Error("Project not found");
  },
  
  getUserProjects: async (userId: string): Promise<Project[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Filter projects where the user is a team member
    return projects.filter(project => 
      project.teamMembers.some(member => member.id === userId)
    );
  },
};

export default api;
