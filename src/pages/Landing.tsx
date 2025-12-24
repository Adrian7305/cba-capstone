import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HeroBackground } from '@/components/3d/HeroBackground';
import { Button } from '@/components/ui/button';
import { ChefHat, Zap, Shield, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: ChefHat,
    title: 'Smart Kitchen',
    description: 'AI-powered order management and kitchen display system',
  },
  {
    icon: Zap,
    title: 'Voice Commands',
    description: 'Take orders naturally with Gemini AI voice recognition',
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'Integrated Razorpay for seamless transactions',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'AI-generated insights for better business decisions',
  },
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      <HeroBackground />
      
      {/* Scan Line Effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
        <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-scan" />
      </div>

      {/* Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-20">
        {/* Navigation */}
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between px-8 py-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center neon-glow-cyan">
              <ChefHat className="w-6 h-6 text-primary" />
            </div>
            <span className="text-2xl font-display font-bold text-gradient-cyan-purple">
              NEXUS RMS
            </span>
          </div>
          <Button
            variant="outline"
            onClick={() => navigate('/login')}
            className="border-primary/50 text-primary hover:bg-primary/10 btn-ripple"
          >
            Login
          </Button>
        </motion.nav>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <span className="px-4 py-2 rounded-full glass-card text-sm text-primary font-medium">
              Next Generation Restaurant Tech
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 max-w-4xl"
          >
            <span className="text-foreground">The Future of </span>
            <span className="neon-text-cyan">Restaurant</span>
            <br />
            <span className="neon-text-purple">Management</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
          >
            Command your restaurant with AI-powered voice orders, real-time analytics,
            and a simplistic interface that puts you in control.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              onClick={() => navigate('/login')}
              className="relative px-10 py-6 text-lg font-semibold bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 neon-glow-cyan btn-ripple animated-border"
            >
              Enter the Portal
              <Zap className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </section>

        {/* Features */}
        <section className="px-8 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 group hover:neon-glow-purple transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="px-8 py-8 border-t border-primary/10">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              © 2025 NEXUS RMS. Powered by Team 5.
            </span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              <span className="text-sm text-muted-foreground">System Online</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
