package utils

import "os"

func GetDefaultEnv(envName string, envDefault string) string {
	env := os.Getenv(envName)
	if env == "" {
		return envDefault
	}
	return env
}
