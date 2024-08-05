import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import NotFoundPage from "./pages/NotFoundPage";
import EditJobPage from "./pages/EditJobPage";
import jobData from './jobs.json';
import { useState } from "react";

const App = () => {
  const [jobs, setJobs] = useState(jobData);

  //Add new job
  const addJob =  (newJob) => {
    setJobs([...jobs, newJob])
  };

  //Delete job
  const deleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  //UpdateJob
  const updateJob = (updatedJob) => {
    setJobs(jobs.map(job => (job.id === updatedJob.id ? updatedJob : job)))
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobsSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path="/add-job"
          element={<AddJobPage addJobsSubmit={addJob} />}
        />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
