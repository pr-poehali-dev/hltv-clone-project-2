import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Player {
  name: string;
  country: string;
  rating: number;
}

interface Team {
  id: number;
  name: string;
  record: string;
  region: string;
  logo: string;
  teamRating: number;
  players: Player[];
}

const teams: Team[] = [
  {
    id: 1,
    name: "VirtVang",
    record: "1 1 1",
    region: "Europe",
    logo: "GL",
    teamRating: 1.17,
    players: [
      { name: "Rez", country: "Швеция", rating: 0.98 },
      { name: "Lance", country: "Дания", rating: 0.87 },
      { name: "Ferdiii", country: "Румыния", rating: 1.17 },
      { name: "DK03", country: "Беларусь", rating: 0.85 },
      { name: "Holda", country: "Чехия", rating: 1.57 }
    ]
  },
  {
    id: 2,
    name: "Lafo",
    record: "1 0 1",
    region: "Europe", 
    logo: "G2",
    teamRating: 1.07,
    players: [
      { name: "Leoscalon", country: "Польша", rating: 0.94 },
      { name: "Raketin", country: "Босния и Герцеговина", rating: 0.93 },
      { name: "kayyo", country: "Германия", rating: 0.78 },
      { name: "Treaplexx", country: "Россия", rating: 1.08 },
      { name: "Utd", country: "Македония", rating: 0.88 }
    ]
  },
  {
    id: 3,
    name: "Drufo",
    record: "",
    region: "Europe",
    logo: "Spirit",
    teamRating: 1.15,
    players: [
      { name: "Default", country: "Россия", rating: 0.76 },
      { name: "Hann", country: "Бразилия", rating: 0.93 },
      { name: "kkkkkk", country: "Венгрия", rating: 1.12 },
      { name: "Iris", country: "Россия", rating: 0.98 },
      { name: "Matvey4ik", country: "Россия", rating: 0.99 }
    ]
  },
  {
    id: 4,
    name: "Encodest",
    record: "1 2 0",
    region: "Europe",
    logo: "Navi",
    teamRating: 1.04,
    players: [
      { name: "Chipsuss", country: "Финляндия", rating: 0.96 },
      { name: "Plaudies", country: "Польша", rating: 0.73 },
      { name: "Aezarm", country: "Бразилия", rating: 0.83 },
      { name: "Pyps", country: "Литва", rating: 0.80 },
      { name: "Plotnich", country: "Украина", rating: 0.75 }
    ]
  },
  {
    id: 5,
    name: "DistWhis",
    record: "",
    region: "Europe",
    logo: "Vitality", 
    teamRating: 1.20,
    players: [
      { name: "Skeler", country: "Франция", rating: 0.97 },
      { name: "Lesord", country: "Эстония", rating: 0.97 },
      { name: "Cuvli", country: "Украина", rating: 0.71 },
      { name: "Toffiz", country: "Португалия", rating: 0.80 },
      { name: "y4str", country: "Израиль", rating: 0.84 }
    ]
  }
];

function getRatingColor(rating: number): string {
  if (rating >= 1.20) return 'text-neon-green';
  if (rating >= 1.10) return 'text-neon-blue';
  if (rating >= 1.00) return 'text-white';
  if (rating >= 0.90) return 'text-yellow-400';
  return 'text-red-400';
}

function getRatingBg(rating: number): string {
  if (rating >= 1.20) return 'bg-neon-green/20 border-neon-green/50';
  if (rating >= 1.10) return 'bg-neon-blue/20 border-neon-blue/50';
  if (rating >= 1.00) return 'bg-white/20 border-white/50';
  if (rating >= 0.90) return 'bg-yellow-400/20 border-yellow-400/50';
  return 'bg-red-400/20 border-red-400/50';
}

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="bg-gradient-to-r from-neon-purple via-neon-blue to-neon-green p-1">
        <div className="bg-black">
          <header className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-bold bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
                  ESPORTS PORTAL
                </div>
              </div>
              <nav className="flex items-center space-x-6">
                <a href="#" className="hover:text-neon-green transition-colors">Команды</a>
                <a href="#" className="hover:text-neon-blue transition-colors">Турниры</a>  
                <a href="#" className="hover:text-neon-pink transition-colors">Рейтинг</a>
                <a href="#" className="hover:text-neon-purple transition-colors">Новости</a>
              </nav>
            </div>
          </header>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
            Рейтинг команд
          </h1>
          <p className="text-xl text-gray-400">Топ команды мирового киберспорта</p>
        </div>

        <div className="grid gap-6">
          {teams.map((team, index) => (
            <Card key={team.id} className="bg-gray-900/50 border-gray-700/50 hover:border-neon-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/20 animate-fade-in">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl font-bold text-neon-green">
                      #{index + 1}
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-neon-purple to-neon-blue rounded-lg flex items-center justify-center font-bold text-sm">
                        {team.logo}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">{team.name}</h2>
                        <div className="flex items-center space-x-3 text-sm text-gray-400">
                          <span className="flex items-center space-x-1">
                            <Icon name="MapPin" size={14} />
                            <span>{team.region}</span>
                          </span>
                          {team.record && (
                            <span className="flex items-center space-x-1">
                              <Icon name="Trophy" size={14} />
                              <span>{team.record}</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`px-4 py-2 rounded-lg border ${getRatingBg(team.teamRating)}`}>
                    <div className="text-center">
                      <div className={`text-xl font-bold ${getRatingColor(team.teamRating)}`}>
                        {team.teamRating.toFixed(2)}
                      </div>
                      <div className="text-xs text-gray-400">Рейтинг</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-3">
                  {team.players.map((player) => (
                    <div key={player.name} className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50 hover:border-neon-purple/50 transition-colors">
                      <div className="text-center">
                        <div className="font-semibold text-sm mb-1">{player.name}</div>
                        <div className="text-xs text-gray-400 mb-2">{player.country}</div>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${getRatingColor(player.rating)} border-current`}
                        >
                          {player.rating.toFixed(2)}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-neon-green to-neon-blue px-8 py-3 rounded-lg font-semibold text-black hover:shadow-lg hover:shadow-neon-green/30 transition-all duration-300 animate-glow">
            Показать больше команд
          </button>
        </div>
      </main>

      <footer className="bg-gray-900/50 border-t border-gray-700/50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent mb-4">
            ESPORTS PORTAL
          </div>
          <p className="text-gray-400">© 2024 Лучшая платформа для киберспорта</p>
        </div>
      </footer>
    </div>
  );
}