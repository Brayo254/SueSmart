"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { careerFormSchema, CareerFormData } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { FiArrowRight, FiCheckCircle, FiLoader, FiMapPin, FiClock, FiAward } from "react-icons/fi";

const jobOpenings = [
  {
    id: "1",
    title: "Senior Associate - Commercial Litigation",
    location: "Nairobi",
    type: "Full-time",
    experience: "5-7 years",
    description:
      "We're looking for an experienced litigator to handle complex commercial disputes. The ideal candidate will have demonstrated expertise in commercial litigation and strong advocacy skills.",
    requirements: [
      "5-7 years of experience in commercial litigation",
      "Strong academic background from a recognized law school",
      "Excellent written and oral advocacy skills",
      "Experience handling cases in Kenyan courts",
      "Ability to work independently and as part of a team",
    ],
  },
  {
    id: "2",
    title: "Associate - Family Law",
    location: "Nairobi",
    type: "Full-time",
    experience: "2-4 years",
    description:
      "Join our family law team to handle divorce, custody, and inheritance matters. We seek a compassionate attorney with strong interpersonal skills.",
    requirements: [
      "2-4 years of experience in family law",
      "Empathetic approach to client matters",
      "Strong negotiation and mediation skills",
      "Knowledge of Kenyan family law statutes",
      "Good academic credentials",
    ],
  },
  {
    id: "3",
    title: "Legal Assistant - Real Estate",
    location: "Nairobi",
    type: "Full-time",
    experience: "1-2 years",
    description:
      "Support our real estate team with document preparation, research, and client communication. Great opportunity for a junior lawyer or law graduate.",
    requirements: [
      "Law degree from a recognized institution",
      "1-2 years of relevant experience (fresh graduates welcome)",
      "Attention to detail",
      "Strong organizational skills",
      "Good research and writing abilities",
    ],
  },
];

const benefits = [
  { icon: FiAward, title: "Competitive Salary", description: "Market-leading compensation packages" },
  { icon: FiClock, title: "Flexible Hours", description: "Work-life balance focused policies" },
  { icon: FiMapPin, title: "Remote Work", description: "Hybrid work arrangements available" },
];

export function CareersContent() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<CareerFormData>({
    resolver: zodResolver(careerFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      linkedin: "",
      coverLetter: "",
    },
  });

  const onSubmit = async (data: CareerFormData) => {
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Application data:", data);
      setIsSuccess(true);
      toast.success("Application submitted!", {
        description: "We'll review your application and get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast.error("Failed to submit application", {
        description: "Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block text-accent-red font-semibold text-sm uppercase tracking-wider mb-3">
              Join Our Team
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Build Your Legal Career
            </h1>
            <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
              Join Kenya's premier law firm and work alongside experienced attorneys
              dedicated to excellence. We offer competitive compensation, professional
              development, and a supportive work environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-md"
              >
                <div className="w-12 h-12 bg-accent-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="text-accent-red" size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-navy">{benefit.title}</h4>
                  <p className="text-navy/70 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
              Open Positions
            </h2>
            <p className="text-navy/70 text-lg">
              Find the perfect role for your legal career
            </p>
          </motion.div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-cream rounded-lg p-8 shadow-md"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-navy mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-navy/70 mb-4">
                      <span className="flex items-center gap-1">
                        <FiMapPin size={16} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiClock size={16} /> {job.type}
                      </span>
                      <span>{job.experience} experience</span>
                    </div>
                    <p className="text-navy/70">{job.description}</p>
                  </div>
                  <Button
                    onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                    variant="secondary"
                    className="lg:self-start"
                  >
                    {selectedJob === job.id ? "Close" : "Apply Now"}
                    <FiArrowRight className="ml-2" />
                  </Button>
                </div>

                {selectedJob === job.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-6 pt-6 border-t border-navy/10"
                  >
                    <h4 className="font-heading text-lg font-bold text-navy mb-4">
                      Requirements
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-navy/70">
                          <FiCheckCircle className="text-accent-red mt-1 flex-shrink-0" size={16} />
                          {req}
                        </li>
                      ))}
                    </ul>

                    {/* Application Form */}
                    <div className="bg-white rounded-lg p-6">
                      <h4 className="font-heading text-lg font-bold text-navy mb-6">
                        Submit Your Application
                      </h4>

                      {isSuccess && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="bg-success/10 border border-success text-success rounded-lg p-4 mb-6 flex items-center gap-3"
                        >
                          <FiCheckCircle size={24} />
                          <div>
                            <p className="font-semibold">Application Submitted!</p>
                            <p className="text-sm">We'll review and get back to you soon.</p>
                          </div>
                        </motion.div>
                      )}

                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="firstName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>First Name *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="John" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="lastName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Last Name *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Doe" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email *</FormLabel>
                                  <FormControl>
                                    <Input type="email" placeholder="john@example.com" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone *</FormLabel>
                                  <FormControl>
                                    <Input type="tel" placeholder="+254 700 000 000" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="position"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Position *</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select position" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {jobOpenings.map((j) => (
                                      <SelectItem key={j.id} value={j.title}>
                                        {j.title}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="experience"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Years of Experience *</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g., 5 years" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="linkedin"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>LinkedIn Profile (Optional)</FormLabel>
                                <FormControl>
                                  <Input placeholder="https://linkedin.com/in/..." {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="coverLetter"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Cover Letter *</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Tell us why you'd be a great fit..."
                                    rows={5}
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-accent-red hover:bg-navy text-white"
                          >
                            {isSubmitting ? (
                              <>
                                <FiLoader className="mr-2 animate-spin" />
                                Submitting...
                              </>
                            ) : (
                              "Submit Application"
                            )}
                          </Button>
                        </form>
                      </Form>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}