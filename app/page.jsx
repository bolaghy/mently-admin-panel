// pages/dashboard.js
"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex h-screen bg-gray-50">
      <Head>
        <title>Techrity Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Sidebar */}
      <div className="w-48 bg-purple-900 text-white flex flex-col">
        <div className="p-4 flex items-center justify-between border-b border-purple-800">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-semibold">techrity</span>
          </div>
          <div className="p-1 rounded border border-purple-700">
            <div className="h-4 w-4"></div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <nav className="mt-4">
            <SidebarItem
              icon={<HomeIcon />}
              label="Dashboard"
              active={activeTab === "dashboard"}
            />
            <SidebarItem
              icon={<DocumentIcon />}
              label="Programs"
              active={activeTab === "programs"}
            />
            <SidebarItem
              icon={<ActivityIcon />}
              label="Activities"
              active={activeTab === "activities"}
            />
            <SidebarItem
              icon={<UsersIcon />}
              label="Users"
              active={activeTab === "users"}
            />
            <SidebarItem
              icon={<ForumIcon />}
              label="Forums"
              active={activeTab === "forums"}
            />
            <SidebarItem
              icon={<FinanceIcon />}
              label="Finances"
              active={activeTab === "finances"}
            />
            <SidebarItem
              icon={<RewardIcon />}
              label="Rewards"
              active={activeTab === "rewards"}
            />
            <div className="px-4 py-2 text-xs text-gray-400">
              <span>Coming Soon</span>
            </div>
            <SidebarItem
              icon={<AnalyticsIcon />}
              label="Analytics"
              active={activeTab === "analytics"}
            />
            <SidebarItem
              icon={<SettingsIcon />}
              label="Settings"
              active={activeTab === "settings"}
            />
            <SidebarItem
              icon={<LogoutIcon />}
              label="Log Out"
              active={activeTab === "logout"}
            />
          </nav>
        </div>

        <div className="p-2 bg-green-500 text-white flex items-center space-x-2">
          <div className="text-sm font-semibold">BE FESTU ImmaNuel:</div>
          <div className="text-xs">Got some questions? I can help!</div>
        </div>

        <div className="p-2 text-xs">
          <a href="#" className="text-blue-300 hover:underline">
            Visit Mently Help Desk Here
          </a>
        </div>

        <div className="p-2 border-t border-purple-800 flex items-center justify-between">
          <span className="text-sm">Switch to Classic Mode</span>
          <ToggleSwitch enabled={true} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm flex justify-between items-center p-4">
          <div></div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <BellIcon />
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white">
                <span className="text-xs">TF</span>
              </div>
              <div className="text-sm">
                <div>Techrity Foundation</div>
                <div className="text-xs text-gray-500">Member</div>
              </div>
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded bg-purple-100 text-purple-800">
              <span className="text-xl">+</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex-1"></div>
            <div className="flex space-x-4">
              <button className="p-2 border rounded flex items-center space-x-2">
                <span>
                  <ListIcon />
                </span>
                <span>Manage Widgets</span>
              </button>
            </div>
          </div>

          {/* Welcome Banner */}
          <div className="bg-purple-600 rounded-lg p-4 mb-6 text-white flex justify-between items-center">
            <div className="flex items-center">
              <h2 className="text-xl font-bold">Welcome Aboard, Blessing 👋</h2>
              <span className="ml-6 text-purple-200">
                We're thrilled to have you join Techrity Team!
              </span>
            </div>
            <button className="bg-white text-purple-800 px-4 py-2 rounded-md hover:bg-gray-100">
              Update Profile
            </button>
          </div>

          {/* Programs Section */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <ListIcon className="mr-2" />
                <h3 className="text-lg font-medium text-gray-700">Programs</h3>
              </div>
              <div className="flex items-center space-x-2">
                <a href="#" className="text-blue-600 text-sm">
                  See all
                </a>
                <button className="p-1">
                  <DotsIcon />
                </button>
              </div>
            </div>

            <div className="flex space-x-4 mb-4">
              <div className="text-sm text-gray-500">Filter</div>
              <div className="relative">
                <button className="flex items-center space-x-1 text-sm border px-2 py-1 rounded">
                  <span>Active</span>
                  <ChevronDownIcon />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ProgramCard
                title="Fundamentals of User Interface & Experience"
                type="Group call"
                hosts={["1", "2", "3"]}
                description="This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach"
              />

              <ProgramCard
                title="Colour Hack Practical Group Call"
                type="Group call"
                hosts={[{ name: "Faith Okoh", image: "/path/to/avatar.jpg" }]}
                description="This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach"
                active={true}
              />

              <ProgramCard
                title="Colour Hack Practical Group Call"
                type="Group call"
                hosts={[{ name: "Sef", image: "/path/to/avatar.jpg" }]}
                description="This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach"
              />
            </div>
          </div>

          {/* Group Calls Section */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <ListIcon className="mr-2" />
                <h3 className="text-lg font-medium text-gray-700">
                  Group Calls
                </h3>
              </div>
              <div className="flex items-center space-x-2">
                <a href="#" className="text-blue-600 text-sm">
                  See all
                </a>
                <button className="p-1">
                  <DotsIcon />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <GroupCallCard
                title="Weekly Meeting - Product Demo Review with Testers"
                status="Ongoing"
                date="Mon, Jul 30, 2024"
                time="9:00 - 11:00AM"
                group="UX Strategy Study group"
              />

              <GroupCallCard
                title="Weekly Meeting - Product Demo Review with Testers"
                status="Upcoming"
                date="Mon, Jul 30, 2024"
                time="9:00 - 11:00AM"
                group="UI, Frontend, back-end"
              />

              <GroupCallCard
                title="Weekly Meeting - Product Demo Review with Testers"
                status="Ongoing"
                date="Mon, Jul 30, 2024"
                time="9:00 - 11:00AM"
                group="UX Strategy Study group"
              />
            </div>
          </div>

          {/* Applications and Mentors Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Applications Section */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <ListIcon className="mr-2" />
                  <h3 className="text-lg font-medium text-gray-700">
                    Applications
                  </h3>
                </div>
                <div className="flex items-center space-x-2">
                  <a href="#" className="text-blue-600 text-sm">
                    See all
                  </a>
                  <button className="p-1">
                    <DotsIcon />
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="p-2 bg-gray-100 rounded text-sm font-medium">
                  Mentors
                </div>

                <ApplicationCard
                  name="Maxwell Smith"
                  email="maxwellsmith@gmail.com"
                  role="Product Designer"
                  location="Lagos, Nigeria"
                  timezone="GMT +1"
                  highlight="Amadi Chile"
                />

                <div className="p-2 bg-gray-100 rounded text-sm font-medium">
                  Students
                </div>

                <ApplicationCard
                  name="Adeati Samuel"
                  email="maxwellsmith@gmail.com"
                />
              </div>
            </div>

            {/* Mentors Section */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <ListIcon className="mr-2" />
                  <h3 className="text-lg font-medium text-gray-700">Mentors</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-1 rounded-full border border-gray-300">
                    <PlusIcon />
                  </button>
                  <button className="p-1">
                    <DotsIcon />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <MentorCard name="Maxwell Smith" role="Product Designer" />

                <MentorCard name="Adeati Samuel" role="Product Designer" />
              </div>
            </div>
          </div>

          {/* Users Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-700">Users</h3>
                <div className="relative">
                  <button className="flex items-center space-x-1 text-sm border px-2 py-1 rounded">
                    <span>All</span>
                    <ChevronDownIcon />
                  </button>
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="w-48 h-48 mx-auto">
                  {/* User Distribution Chart - Replace with actual chart implementation */}
                  <div className="relative w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
                    <div className="absolute inset-0">
                      {/* This would be your actual chart */}
                      <div className="h-full w-full rounded-full"></div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">240</div>
                      <div className="text-sm text-gray-500">Users</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center text-sm">
                    <span className="w-3 h-3 rounded-full bg-blue-400 mr-2"></span>
                    <span className="flex-1">Students</span>
                    <span className="font-medium">200</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></span>
                    <span className="flex-1">Mentors</span>
                    <span className="font-medium">8</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-3 h-3 rounded-full bg-pink-400 mr-2"></span>
                    <span className="flex-1">Programs</span>
                    <span className="font-medium">22</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-3 h-3 rounded-full bg-green-400 mr-2"></span>
                    <span className="flex-1">Others</span>
                    <span className="font-medium">10</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <ListIcon className="mr-2" />
                  <h3 className="text-lg font-medium text-gray-700">
                    Recent Activities
                  </h3>
                </div>
                <div className="flex items-center space-x-2">
                  <a href="#" className="text-blue-600 text-sm">
                    See all
                  </a>
                  <button className="p-1">
                    <DotsIcon />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <ActivityCard
                  type="KYC Verification"
                  description="45 new persons just signed up on Mently."
                  time="25 minutes Ago"
                />

                <ActivityCard
                  type="New User Sign Up!"
                  description="45 new persons just signed up on Mently."
                  time="25 minutes Ago"
                />

                <ActivityCard
                  type="Withdrawal Request"
                  description="..."
                  user="Chinwe Nwankwo"
                  time="25 minutes Ago"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Component for sidebar items
function SidebarItem({ icon, label, active }) {
  return (
    <a
      href="#"
      className={`flex items-center space-x-3 px-4 py-3 text-sm ${
        active
          ? "bg-purple-800 text-white"
          : "text-gray-300 hover:bg-purple-800 hover:text-white"
      }`}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </a>
  );
}

// Program Card Component
function ProgramCard({ title, type, hosts, description, active }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="relative h-32 bg-gray-200">
        {active && (
          <div className="absolute top-2 right-2 bg-white p-1 rounded-full">
            <div className="h-4 w-4"></div>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="text-white font-bold">{title}</h3>
          <div className="mt-1 inline-block bg-green-500 text-white text-xs px-2 py-1 rounded">
            {type}
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex -space-x-2">
            {Array.isArray(hosts) &&
            hosts.length > 0 &&
            typeof hosts[0] === "string" ? (
              hosts.map((host, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"
                ></div>
              ))
            ) : (
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                <span className="text-xs text-gray-500">
                  Hosted By: {hosts?.[0]?.name}
                </span>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 text-xs border border-purple-600 text-purple-600 rounded hover:bg-purple-50">
              View Details
            </button>
            <button className="px-3 py-1 text-xs bg-purple-600 text-white rounded hover:bg-purple-700">
              {active ? "Join Mentor" : "Analysis"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Group Call Card Component
function GroupCallCard({ title, status, date, time, group }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="relative h-24 bg-gray-200">
        <div
          className={`absolute top-2 left-2 flex items-center space-x-1 ${
            status === "Ongoing" ? "text-green-600" : "text-blue-600"
          } bg-white px-2 py-1 rounded-full text-xs`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              status === "Ongoing" ? "bg-green-600" : "bg-blue-600"
            }`}
          ></span>
          <span>{status}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium mb-2">{title}</h3>
        <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
          <div className="flex items-center">
            <CalendarIcon className="mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="mr-1" />
            <span>{time}</span>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <UsersIcon className="mr-2 text-gray-400" />
          <span className="text-xs">{group}</span>
        </div>
        <div className="flex space-x-2">
          <button className="flex-1 px-3 py-2 text-xs border border-purple-600 text-purple-600 rounded hover:bg-purple-50">
            View Participants
          </button>
          <button className="flex-1 px-3 py-2 text-xs bg-purple-600 text-white rounded hover:bg-purple-700 flex items-center justify-center">
            <span>Join Now</span>
            <ArrowRightIcon className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Application Card Component
function ApplicationCard({ name, email, role, location, timezone, highlight }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
        <div className="flex-1">
          <div className="flex items-center">
            <div className="font-medium">{name}</div>
            {highlight && (
              <div className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">
                {highlight}
              </div>
            )}
          </div>
          <div className="text-xs text-gray-500">{email}</div>
          {role && (
            <div className="flex items-center mt-1 text-xs">
              <span className="bg-gray-100 px-2 py-1 rounded">{role}</span>
              {location && (
                <>
                  <span className="mx-1">•</span>
                  <span>{location}</span>
                </>
              )}
              {timezone && (
                <>
                  <span className="mx-1">•</span>
                  <span>{timezone}</span>
                </>
              )}
            </div>
          )}
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-red-50 text-red-500 rounded text-xs">
            Reject
          </button>
          <button className="px-3 py-1 bg-purple-600 text-white rounded text-xs">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

// Mentor Card Component
function MentorCard({ name, role }) {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
      <div className="flex-1">
        <div className="font-medium">{name}</div>
        <div className="text-xs text-gray-500">{role}</div>
      </div>
      <button className="px-3 py-1 bg-purple-600 text-white rounded-full text-xs">
        Message
      </button>
    </div>
  );
}

// Activity Card Component
function ActivityCard({ type, description, user, time }) {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center mr-3">
        {user ? user[0] : "A"}
      </div>
      <div className="flex-1">
        <div className="font-medium">{type}</div>
        <div className="text-xs text-gray-500">{description}</div>
        <div className="text-xs text-gray-400 mt-1">{time}</div>
      </div>
    </div>
  );
}

// Toggle Switch Component
function ToggleSwitch({ enabled }) {
  return (
    <div
      className={`w-10 h-5 rounded-full p-1 ${
        enabled ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-3 h-3 rounded-full bg-white transform transition-transform ${
          enabled ? "translate-x-5" : ""
        }`}
      ></div>
    </div>
  );
}

// Icon Components
function HomeIcon() {
  return <div className="w-5 h-5 flex items-center justify-center">◆</div>;
}

function DocumentIcon() {
  return <div className="w-5 h-5 flex items-center justify-center">◈</div>;
}

function ActivityIcon() {
  return <div className="w-5 h-5 flex items-center justify-center">◇</div>;
}

function UsersIcon() {
  return <div className="w-5 h-5 flex items-center justify-center">◇</div>;
}

function ForumIcon() {
  return <div className="w-5 h-5 flex items-center justify-center">◇</div>;
}

function FinanceIcon() {
  return <div className="w-5 h-5 flex items-center justify-center">◇</div>;
}

function RewardIcon() {
  return <div className="w-5 h-5 flex items-center justify-center">◇</div>;
}

function AnalyticsIcon() {
  return <div className="w-5 h-5 flex items-center justify-center">◇</div>;
}

function SettingsIcon() {
  return <div className="w-5 h-5 flex items-center justify-center">◇</div>;
}

function LogoutIcon() {
  return <div className="w-5 h-5 flex items-center justify-center">◇</div>;
}

function BellIcon() {
  return <div className="w-5 h-5 flex items-center justify-center">🔔</div>;
}

function ListIcon() {
  return <div className="w-5 h-5 flex items-center justify-center">≡</div>;
}

function DotsIcon() {
  return <div className="w-5 h-5 flex items-center justify-center">⋮</div>;
}

function ChevronDownIcon() {
  return <div className="w-4 h-4 flex items-center justify-center">▼</div>;
}

function CalendarIcon() {
  return <div className="w-4 h-4 flex items-center justify-center">📅</div>;
}

function ClockIcon() {
  return <div className="w-4 h-4 flex items-center justify-center">⏱️</div>;
}

function ArrowRightIcon() {
  return <div className="w-4 h-4 flex items-center justify-center">→</div>;
}

function PlusIcon() {
  return <div className="w-4 h-4 flex items-center justify-center">+</div>;
}
