package io.synker;

import io.dropwizard.core.Application;
import io.dropwizard.core.setup.Bootstrap;
import io.dropwizard.core.setup.Environment;
import io.dropwizard.db.DataSourceFactory;
import io.dropwizard.jdbi3.JdbiFactory;
import io.dropwizard.migrations.MigrationsBundle;
import io.synker.health.TemplateHealthCheck;
import io.synker.resources.HelloWorldResource;
import org.jdbi.v3.core.Jdbi;

public class SynkerApplication extends Application<SynkerConfiguration> {

    public static void main(final String[] args) throws Exception {
        System.out.println("Hello world");
        new SynkerApplication().run(args);
    }

    @Override
    public String getName() {
        return "Synker";
    }

    @Override
    public void initialize(final Bootstrap<SynkerConfiguration> bootstrap) {
        bootstrap.addBundle(new MigrationsBundle<SynkerConfiguration>() {
            @Override
            public DataSourceFactory getDataSourceFactory(SynkerConfiguration configuration) {
                return configuration.getDataSourceFactory();
            }
        });
    }

    @Override
    public void run(final SynkerConfiguration configuration,
                    final Environment environment) {
        // TODO: implement application

        final JdbiFactory factory = new JdbiFactory();
        final Jdbi jdbi = factory.build(environment, configuration.getDataSourceFactory(), "mysql");

    }

}
